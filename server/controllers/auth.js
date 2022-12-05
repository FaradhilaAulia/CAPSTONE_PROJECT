import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';
import jwt from 'jsonwebtoken';
import AWS from 'aws-sdk';
import nanoid from 'nanoid';

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const SES = new AWS.SES(awsConfig);

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validation
    if (!name) return res.status(400).send('Name is required');
    if (!password || password.lengt < 6) {
      return res.status(400).send('Password is required and should be min 6 characters long');
    }

    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send('Email is Taken');

    //hash Password
    const hashedPassword = await hashPassword(password);

    // register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    //console.log("saved user", user);
    return res.json({ ok: true });
  } catch (req) {
    console.log(err);
    return res.status(400).send('Error, Try again.');
  }
};

export const login = async (req, res) => {
  try {
    //console.log(req.body);
    const { email, password } = req.body;
    //check if db has the emaail
    const user = await User.findOne({ email }).exec();
    if (!user) return res.status(400).send('No User Found');
    //check password
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send('Wrong Password!');
    // create signed JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    //return user and token to client, exclude hashed password
    user.password = undefined;
    // send token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      //secure: true, //only works in https
    });

    // send usere as json response
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send('error.try again');
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie('token');
    return res.json({ message: 'Sign Out Success' });
  } catch (err) {
    console.log(err);
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req._id).select('-password').exec();
    console.log('current_User', user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};

export const sendTestEmail = async (req, res) => {
  //console.log('send Email Using SES');
  //res.json({ ok: true });

  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [''],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
            <html>
              <h1> Reset Password </h1>
              <p> Please Follow this</p>
            </html>
          `,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Password reset link',
      },
    },
  };

  const emailSent = SES.sendEmail(params).promise();

  emailSent
    .then((data) => {
      console.log(data);
      res.json({ ok: true });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    //console.log(email);
    const shortCode = nanoid(6).toUpperCase();
    const user = await User.findOneAndUpdate({ email }, { passwordResetCode: shortCode });
    if (!user) return res.status(400).send('User tidak ditemukan');

    //prepare for email
    const params = {
      Source: process.env.EMAIL_FROM,
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `
              <html>
                <h1> Reset Password</h1>
                <p> Use this code to reset password</p>
                <h2 style="color:red;">${shortCode}</h2>
              </html>
            `,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Reset Password',
        },
      },
    };

    const emailSent = SES.sendEmail(params).promise();
    emailSent
      .then((data) => {
        console.log(data);
        res.json({ ok: true });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;
    //console.table({ email, code, newPassword });
    const hashedPassword = await hashPassword(newPassword);
    const user = User.findByIdAndUpdate(
      {
        email,
        passwordResetCode: code,
      },
      {
        password: hashedPassword,
        passwordResetCode: '',
      }
    ).exec();
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send('Error! Try Again');
  }
};
