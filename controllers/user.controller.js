const { ErrorHandler } = require("../helpers/error");

const users = [
  {
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com",
  },
  {
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com",
  },
  {
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com",
  },
];

// app.post("/api/user", (req, res) => {
//   const user = req.body.user;
//   console.log("Adding user:::::", user);
//   users.push(user);
//   res.json("user addedd");
// });

exports.getUsers = async (req, res) => {
  try {
    return res.status(200).send({ status: "ok", data: users });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

