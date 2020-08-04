import express from "express";

const app = express();
const port = 3333;

app.listen(port, () => {
  console.log(`Server running on http://localhost/${port}`);
});

app.get("/users", () => {
  console.log("hey");
});
