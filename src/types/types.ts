export interface User {
  id: string;
  name: string;
  address: string;
  booksCheckedOut: string[];
}

export interface Book {
  id: string;
  name: string;
  pages: number;
  isCheckedOut: boolean;
}
