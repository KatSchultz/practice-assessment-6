import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { User } from "../types/types";
import { users } from "../data/users";

export class UserController {
  allUsers(req: Request, res: Response) {
    if (req.query.minBooksCheckedOut) {
      console.log(req.query.minBooksCheckedOut);
      const minBookArr = users.filter(
        (user) =>
          user.booksCheckedOut.length >= Number(req.query.minBooksCheckedOut)
      );
      return res.status(200).json(minBookArr);
    }

    res.status(200).json(users);
  }

  getSingleUser(req: Request, res: Response) {
    const user = users.find((user) => user.id === req.params.id);

    if (!user)
      return res
        .status(404)
        .json({ error: `User with id ${req.params.id} not found` });

    return res.status(200).json(user);
  }

  addUser(req: Request, res: Response) {
    const newUser = { id: nanoid(5), ...req.body };

    users.push(newUser);

    res.status(201).json(newUser);
  }

  updateUser(req: Request, res: Response) {
    const userIndex = users.findIndex((user) => user.id === req.params.id);
    let user = users[userIndex];

    if (!user)
      return res
        .status(404)
        .json({ error: `User with id ${req.params.id} not found` });

    user = { ...user, ...req.body };
    users.splice(userIndex, 1, user);

    return res.status(200).json(user);
  }

  deleteUser(req: Request, res: Response) {
    console.log(req.params);
    let userIndex = users.findIndex((user) => user.id === req.params.id);
    console.log("userindex: ", userIndex);
    if (userIndex === -1)
      return res
        .status(404)
        .json({ error: `User with id ${req.params.id} not found` });

    users.splice(userIndex, 1);

    res.status(204).json();
  }

  checkUserBooks(req: Request, res: Response) {
    const user = users.find((user) => user.id === req.params.id);

    if (!user)
      return res
        .status(404)
        .json({ error: `User with id ${req.params.id} not found` });

    return res.status(200).json(user.booksCheckedOut);
  }
}

export const userController = new UserController();
