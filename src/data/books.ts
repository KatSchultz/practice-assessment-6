import { Book } from "../types/types";
import { nanoid } from "nanoid";

export const books: Book[] = [
  {
    id: "testBook",
    name: "For Easy Testing",
    pages: 190,
    isCheckedOut: true,
  },
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
    isCheckedOut: false,
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
    isCheckedOut: false,
  },
];
