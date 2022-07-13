import { nanoid } from "nanoid";

export const users = [
  {
    id: nanoid(5),
    name: "Tom",
    address: "123 Main St",
    booksCheckedOut: ["One Flew Over the Cuckoo's Nest", "Of Mice and Men"],
  },
  {
    id: nanoid(5),
    name: "Katie",
    address: "333 Shady Lane",
    booksCheckedOut: [],
  },
  {
    id: nanoid(5),
    name: "Chris",
    address: "555 Sunnyside",
    booksCheckedOut: [],
  },
  {
    id: nanoid(5),
    name: "Marissa",
    address: "222 State St",
    booksCheckedOut: [],
  },
  {
    id: nanoid(5),
    name: "Erica",
    address: "808 Morningside",
    booksCheckedOut: ["Goodnight Moon"],
  },
];
