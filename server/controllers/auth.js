import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from 'jsonwebtoken';
import AWS from "aws-sdk";

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCSES_KEY,
    region: process.env.AWS_REGION,
    apiVersion: process.env.AWS_API_VERSION,
}

const SES = new AWS.SES(awsConfig);

export const register = async (req, res) => {
    try{
        const{name, email, password} = req.body
        //validation
        if (!name) return res.status(400).send("Name is required");
        if (!password || password.lengt < 6 ) {
            return res
            .status(400)
            .send("Password is required and should be min 6 characters long");
        }

        let userExist = await User.findOne({email}).exec();
        if(userExist) return res.status(400).send("Email is Taken");

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
        return res.json({ok: true});

    } catch (req){
        console.log(err)
        return res.status(400).send('Error, Try again.')
    }
};

export const login = async (req, res) => {
    try{
        //console.log(req.body);
        const {email, password} = req.body
        //check if db has the emaail
        const user = await User.findOne({ email }).exec();
        if(!user) return res.status(400).send("No User Found");
        //check password
        const match = await comparePassword(password, user.password);
        // create signed JWT
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
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

    }catch (err) {
        console.log(err)
        return res.status(400).send("error.try again");
    }
};

export const logout = async (req, res) => {
    try{
        res.clearCookie("token");
        return res.json({message: "Sign Out Success"});
    } catch (err) {
        console.log(err);
    }
};

export const currentUser = async (req, res) => {
    try{
        const user = await User.findById(req._id).select("-password").exec();
        console.log("current_User", user);
        return res.json({ ok: true });
    } catch (err) {
        console.log(err)
    }
};

export const sendTestEmail = async (req, res) => {
    console.log("send Email Using SES");
    res.json({ ok: true });
};