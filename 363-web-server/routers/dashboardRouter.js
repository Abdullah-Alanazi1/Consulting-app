import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// * Get the current directory path.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// * Create a new router instance.
const router = express.Router();
// get and send the dashboard.html file
/**
 * Handles GET requests to the root path and sends the dashboard HTML file as a response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void} Sends the dashboard.html file as a response.
 */
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Pages", "dashboard.html"));
});
export default router;
