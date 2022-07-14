import express from "express";
import { userController } from "../controllers/users.controllers";

export const userRouter = express.Router();

userRouter.route("/").get(userController.allUsers).post(userController.addUser);

userRouter
  .route("/:id")
  .get(userController.getSingleUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

userRouter.route("/:id/books").get(userController.checkUserBooks);
