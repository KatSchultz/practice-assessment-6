import { Book } from "../types/types";
import { nanoid } from "nanoid";

const books: Book[] = [
  {
    id: nanoid(6),
    name: "Of Mice and Men",
    pages: 190,
    isCheckedOut: true,
  },
  {
    id: nanoid(6),
    name: "One Flew Over the Cuckoo's Nest",
    pages: 220,
    isCheckedOut: true,
  },
  {
    id: nanoid(6),
    name: "Slaughterhouse Five",
    pages: 240,
    isCheckedOut: true,
  },
  {
    id: nanoid(6),
    name: "Goodnight Moon",
    pages: 20,
    isCheckedOut: true,
  },
  {
    id: nanoid(6),
    name: "The Hobbit",
    pages: 360,
    isCheckedOut: true,
  },
];
