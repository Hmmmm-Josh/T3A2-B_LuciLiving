import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"


export const test = (req, res) => {
  res.json({message: "API is working! :3"});
 };

export const signout = (req, res, next) => {
  try {
    res
    .clearCookie('access_token')
    .status(200)
    .json('User has been signed out!');
  } catch (error) {
    next(error);
  }
};