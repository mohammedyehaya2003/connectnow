const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();
const pool = require("./config/db");
const authRoutes = require("./routes/auth");
const roomRoutes = require("./routes/roomRoutes");
const messageRoutes = require("./routes/messageRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const socketHandler = require("./socket");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


socketHandler(io);

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use(
  "/uploads",
  express.static("uploads")
);

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/upload",uploadRoutes);

app.get("/", (req, res) => {
  res.send("ConnectNow Backend Running 🚀");
});

app.get("/api/protected", authMiddleware, (req, res) => {

  res.json({
    message: "Protected route accessed successfully 🔥",
    user: req.user,
  });

});



server.listen(PORT, async () => {

  try {

    await pool.connect();

    console.log("PostgreSQL Connected Successfully ✅");

    console.log(`Server running on port ${PORT}`);

  } catch (error) {

    console.log("Database connection failed ❌");

    console.log(error.message);

  }

});