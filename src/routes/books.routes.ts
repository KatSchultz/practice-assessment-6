import express from "express";
import { bookController } from "../controllers/books.controllers";

export const bookRouter = express.Router();

bookRouter.route("/").get(bookController.allBooks).post(bookController.addBook);

bookRouter
  .route("/:id")
  .get(bookController.getSingleBook)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

bookRouter
  .route("/:id/checkout/:userId")
  .patch(bookController.userCheckoutBook);

bookRouter.route("/:id/checkin/:userId").patch(bookController.userCheckInBook);
