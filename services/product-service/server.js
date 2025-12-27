const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.json([{ id: 1, name: "Laptop", price: 50000 }]);
});

app.listen(4002, () => {
  console.log("Product service running on port 4002");
});