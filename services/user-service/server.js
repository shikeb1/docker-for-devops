const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "User service working" });
});

app.listen(4001, () => {
  console.log("User service running on port 4001");
});