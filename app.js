const express = require("express");
const app = express();

// Route
app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working 🚀");
});

// IMPORTANT: Bind to 0.0.0.0 for EC2
const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});