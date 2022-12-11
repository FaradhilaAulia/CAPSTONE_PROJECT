import User from '../models/user';
import queryString from 'query-string';
import Course from '../models/course';

const stripe = require('stripe')(process.env.STRIPE_SECRET);

export const makeInstructor = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id).exec();
    if (!user.stripe_account_id) {
      const account = await stripe.accounts.create({ type: 'express' });
      user.stripe_account_id = account.id;
      user.save();
    }
    let accountLink = await stripe.accountLinks.create({
      account: user.stripe_account_id,
      refresh_url: process.env.STRIPE_REDIRECT_URL,
      return_url: process.env.STRIPE_REDIRECT_URL,
      type: 'account_onboarding',
    });
    accountLink = Object.assign(accountLink, {
      'stripe_user[email]': user.email,
    });
    res.send(`${accountLink.url}?${queryString.stringify(accountLink)}`);
  } catch (err) {
    console.log('MAKE INSTRUCTOR ERR ', err);
  }
};

export const getAccountStatus = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id).exec();
    const account = await stripe.accounts.retrieve(user.stripe_account_id);
    if (!account.charges_enabled) {
      return res.status(401).send('Unauthorized');
    } else {
      const statusUpdated = await User.findByIdAndUpdate(
        user._id,
        {
          stripe_seller: account,
          $addToSet: { role: 'Instructor' },
        },
        { new: true }
      )
        .select('-password')
        .exec();
      res.json(statusUpdated);
    }
  } catch (err) {
    console.log(err);
  }
};

export const currentInstructor = async (req, res) => {
  try {
    let user = await User.findById(req.auth._id).select('-password').exec();
    if (!user.role.includes('Instructor')) {
      return res.sendStatus(403);
    } else {
      res.json({ ok: true });
    }
  } catch (err) {
    console.log(err);
  }
};

export const instructorCourses = async (req, res) => {
  try {
    const courses = await Course.find({ instructor: req.auth._id }).sort({ createdAt: -1 }).exec();
    res.json(courses);
  } catch (err) {
    console.log(err);
  }
};

export const studentCount = async (req, res) => {
  try {
    const users = await User.find({ courses: req.body.courseId })
      .select("_id")
      .exec();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};