import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import User from "../models/User.js"; // Ensure you have the correct path to your User model

// Get current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

/**
 * Handles GET requests to the root path of /signUp and serves the sign up page.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void} Sends the signUp.html file as a response.
 */
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Pages", "signup.html"));
});

/**
 * Handles POST requests to the root path of /signUp and processes the signup form data.
 *
 * @param {Object} req - The request object containing the signup form data in req.body.
 * @param {Object} res - The response object to send back the signup status.
 *
 * @returns {Object} - Sends a JSON response with a success or error message.
 *
 * @throws Will throw an error if there's an issue with saving the new user to the database.
 */
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, password, position } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ msg: "Please fill in all required fields." });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "User already exists with that email." });
    }

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      position,
    });
    await newUser.save();

    // Respond with success message
    return res.status(201).json({ msg: "Signup successful." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal server error." });
  }
});

export default router;
