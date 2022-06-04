const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./src/routes/user.route");
// const { registerUser } = require("./src/routes/user.controller");

app.use(cors());
app.use(express.json());
// app.use(userRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server running",
  });
});

app.post("/register", (req, res)=>{
if (
  !req.body.fullname ||
  !req.body.email ||
  !req.body.password ||
  !req.body.username ||
  !req.body.phone ||
  !req.body.gender
) {
  return res.status(400).json({
    message: "Some fields missing",
    successful: false,
  });
}
  res.status(200).json({
    message: "successfully registered",
    successful: true,
  });

})

module.exports = { app };
