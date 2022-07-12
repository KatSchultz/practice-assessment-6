import { Request, Response } from "express";
import { User } from "../types/types";

class UserController {
  allUsers(req: Request, res: Response) {
    res.status(200).json();
  }
}
