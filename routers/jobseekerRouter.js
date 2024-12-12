import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import User from "../models/User.js";

// * Get the current directory path.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// * Handle GET request at / and send the customer.html file to the client.
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Pages", "customer.html"));
});

export default router;
