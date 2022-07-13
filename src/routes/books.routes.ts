import express from "express";
import { bookController } from "../controllers/books.controllers";

export const bookRouter = express.Router();

bookRouter.route("/").get(bookController.allBooks);
