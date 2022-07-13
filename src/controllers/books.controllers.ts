import { Request, Response } from "express";
import { books } from "../data/books";
import { nanoid } from "nanoid";

class BookController {
  allBooks(req: Request, res: Response) {
    if (req.query.isCheckedOut === "true") {
      console.log(Boolean(req.query.isCheckedOut));
      const minBookArr = books.filter((book) => book.isCheckedOut);
      return res.status(200).json(minBookArr);
    }
    if (req.query.isCheckedOut === "false") {
      console.log(req.query.isCheckedOut);
      const minBookArr = books.filter((book) => book.isCheckedOut);
      return res.status(200).json(minBookArr);
    }
    console.log("get all books");

    res.status(200).json(books);
  }

  getSingleBook(req: Request, res: Response) {
    const book = books.find((book) => book.id === req.params.id);

    if (!book)
      return res
        .status(404)
        .json({ error: `Book with id ${req.params.id} not found` });

    return res.status(200).json(book);
  }

  addBook(req: Request, res: Response) {
    const newBook = { id: nanoid(5), ...req.body };

    books.push(newBook);

    res.status(201).json(newBook);
  }

  updateBook(req: Request, res: Response) {
    let book = books.find((user) => user.id === req.params.id);

    if (!book)
      return res
        .status(404)
        .json({ error: `Book with id ${req.params.id} not found` });

    book = { ...book, ...req.body };

    return res.status(200).json(book);
  }

  deleteUser(req: Request, res: Response) {
    let bookIndex = books.findIndex((book) => book.id === req.params.id);

    if (!bookIndex)
      return res
        .status(404)
        .json({ error: `Book with id ${req.params.id} not found` });

    books.splice(bookIndex, 1);

    res.status(204).json();
  }
}

export const bookController = new BookController();
