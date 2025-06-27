const express = require("express");
const cors = require("cors");
require("dotenv").config();

const createOrderRoute = require("./api/create_order");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/razorpay", createOrderRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
