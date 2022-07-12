import express from "express";
import cors from "cors";
import { bookRouter } from "./routes/books.routes";
import { userRouter } from "./routes/users.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/books", bookRouter);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
