const express = require("express");

const router = express.Router();

const {
  createUser,
  getUsers,
  getUsersByRole,
} = require("../controllers/adminController");

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");


// ==========================================
// ALL ADMIN ROUTES REQUIRE LOGIN + ADMIN ROLE
// ==========================================

router.use(protect);
router.use(adminOnly);


// Create School / Teacher / Student / Parent
router.post("/users", createUser);


// Get all users
router.get("/users", getUsers);


// Get users by role
router.get("/users/:role", getUsersByRole);


module.exports = router;