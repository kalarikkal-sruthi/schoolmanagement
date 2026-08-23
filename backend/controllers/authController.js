const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//register

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
      role: role || "student",
    });
    res.status(201).json({
      message: "USer Registered Succefully",
      user: {
        id: user._id,
        name: user.name,
        password: user.password,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
        message:"Server Error"
    });
  }
};

module.exports={register};
