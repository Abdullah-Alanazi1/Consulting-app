import jwt from "jsonwebtoken";
/**
 * * for authentication middleware, assigning a JWTToken.
 * * JWT is used to authenticate the user.
 */
export default (req, res, next) => {
  const { username, password } = req.body;
  // * Calling the hardcoded username and password for simplicity
  // ? Replace with your own authentication logic, e.g., database lookup
  // ? Replace USERNAME and PASSWORD with your own credentials.
  if (username === USERNAME && password === PASSWORD) {
    // Create a payload for the token
    const payload = { username };

    // Generate JWT token with a 1-hour expiry
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    return res.json({ token });
  }

  // Invalid credentials
  res.status(401).json({ message: "Invalid username or password" });
};
