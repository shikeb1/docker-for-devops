const express = require("express");
const app = express();

app.get("/orders", (req, res) => {
  res.json({ message: "Order placed successfully" });
});

app.listen(4003, () => {
  console.log("Order service running on port 4003");
});