const express = require("express");
const { dbConnection } = require("./configs/db");

const cors = require("cors");
const { userRouter } = require("./routes/User.route");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/api", userRouter);
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(process.env.PORT, async () => {
  try {
    await dbConnection;
    console.log("Connected to db");
  } catch (e) {
    console.log(e.message);
  }
  console.log(`listening on port ${process.env.PORT}`);
});
