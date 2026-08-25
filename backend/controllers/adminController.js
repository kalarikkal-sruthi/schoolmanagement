const User = require("../models/User");
const bcrypt = require("bcryptjs");


// ==========================================
// ADMIN CREATE USER
// ==========================================

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Only these roles can be created by Admin
    const allowedRoles = [
      "school",
      "teacher",
      "student",
      "parent",
    ];

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "Name, email, password and role are required",
      });
    }

    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    // Check existing email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: `${role} created successfully`,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error("CREATE USER ERROR:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


// ==========================================
// GET ALL USERS
// ==========================================

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      users,
    });

  } catch (error) {
    console.error("GET USERS ERROR:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};


// ==========================================
// GET USERS BY ROLE
// ==========================================

const getUsersByRole = async (req, res) => {
  try {
    const { role } = req.params;

    const allowedRoles = [
      "school",
      "teacher",
      "student",
      "parent",
    ];

    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    const users = await User.find({ role })
      .select("-password")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      users,
    });

  } catch (error) {
    console.error("GET USERS BY ROLE ERROR:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};


module.exports = {
  createUser,
  getUsers,
  getUsersByRole,
};