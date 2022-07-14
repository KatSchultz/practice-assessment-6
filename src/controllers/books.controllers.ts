import { Request, Response } from "express";
import { books } from "../data/books";
import { nanoid } from "nanoid";
import { users } from "../data/users";
import { Book, User } from "../types/types";

class BookController {
  allBooks(req: Request, res: Response) {
    if (req.query.isCheckedOut) {
      if (req.query.isCheckedOut === "true") {
        const minBookArr = books.filter((book) => book.isCheckedOut);
        return res.status(200).json(minBookArr);
      } else {
        const minBookArr = books.filter((book) => !book.isCheckedOut);
        return res.status(200).json(minBookArr);
      }
    }

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
    const newBook = { id: nanoid(6), ...req.body };

    books.push(newBook);

    res.status(201).json(newBook);
  }

  updateBook(req: Request, res: Response) {
    let bookIndex = books.findIndex((book) => book.id === req.params.id);
    let book = books[bookIndex];

    if (!book)
      return res
        .status(404)
        .json({ error: `Book with id ${req.params.id} not found` });

    book = { ...book, ...req.body };
    books.splice(bookIndex, 1, book);

    return res.status(200).json(book);
  }

  deleteBook(req: Request, res: Response) {
    let bookIndex = books.findIndex((book) => book.id === req.params.id);

    if (bookIndex === -1)
      return res
        .status(404)
        .json({ error: `Book with id ${req.params.id} not found` });

    books.splice(bookIndex, 1);

    res.status(204).json();
  }

  userCheckoutBook(req: Request, res: Response) {
    const bookId = req.params.id;
    const userId = req.params.userId;
    const bookIndex = books.findIndex((book) => book.id === bookId);

    let book = books[bookIndex];
    book = { ...book, ...req.body };
    books.splice(bookIndex, 1, book);

    let user = users.find((user) => user.id === userId);
    if (user) {
      user.booksCheckedOut = [...user.booksCheckedOut, bookId];
    }
    res.status(200).json(book);
  }

  userCheckInBook(req: Request, res: Response) {
    console.log(req.params);
    const bookId = req.params.id;
    const userId = req.params.userId;
    const bookIndex = books.findIndex((book) => book.id === bookId);

    let book = books[bookIndex];
    book = { ...book, ...req.body };
    books.splice(bookIndex, 1, book);

    let user = users.find((user) => user.id === userId);
    if (user) {
      let userBookIndex = user.booksCheckedOut.findIndex(
        (elem) => elem === bookId
      );
      user.booksCheckedOut.splice(userBookIndex, 1);
    }

    console.log(book);
    res.status(200).json(book);
  }
}

export const bookController = new BookController();
