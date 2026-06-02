const pool = require("../config/db");

const socketHandler = (io) => {

  io.on("connection", (socket) => {

    console.log("New user connected 🔥");

    socket.on("userOnline", async (userId) => {

     console.log(
    "BACKEND RECEIVED:",
    userId
  );


  try {

    await pool.query(
      `UPDATE users
       SET is_online = true
       WHERE id = $1`,
      [userId]
    );

    const result = await pool.query(
  "SELECT * FROM users WHERE id = $1",
  [userId]
);

console.log(result.rows[0]);

    console.log(`User ${userId} online`);

  } catch (error) {

    console.log(error.message);

  }

});

socket.on("userOffline", async (userId) => {

  try {

    await pool.query(
      `UPDATE users
       SET is_online = false
       WHERE id = $1`,
      [userId]
    );

    console.log(
      `User ${userId} offline`
    );

  } catch (error) {

    console.log(error.message);

  }

});

    socket.on("joinRoom", (roomId) => {

    socket.join(roomId.toString());

    console.log(`User joined room: ${roomId}`);
    });

    socket.on("typing", (data) => {

  socket.to(data.roomId.toString()).emit(
    "showTyping",
    `${data.user} is typing...`
  );

});

    socket.on("sendMessage", async (data) => {


  try {

    const savedMessage = await pool.query(
      `INSERT INTO messages (room_id, user_id, message)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [data.roomId, data.userId, data.message]
    );

    io.to(data.roomId.toString()).emit(
      "receiveMessage",
      savedMessage.rows[0]
    );

    console.log("Message saved and sent 🔥");

  } catch (error) {

    console.log(error.message);

  }

  });

socket.on(
  "deleteMessage",
  async (messageId) => {

    try {

      await pool.query(
        `DELETE FROM messages
         WHERE id = $1`,
        [messageId]
      );

      io.emit(
        "messageDeleted",
        messageId
      );

      console.log(
        "Message deleted 🗑️"
      );

    } catch (error) {

      console.log(
        error.message
      );

    }

  }
);


  });

};

module.exports = socketHandler;