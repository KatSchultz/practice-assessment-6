import express from "express";

export const userRouter = express.Router();

userRouter.route("/").get();