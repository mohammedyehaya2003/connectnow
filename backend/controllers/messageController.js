const pool = require("../config/db");

const getRoomMessages = async (req, res) => {

  try {

    const { roomId } = req.params;

    const messages = await pool.query(
      `SELECT messages.*,
          users.name
   FROM messages
   JOIN users
   ON messages.user_id = users.id
   WHERE room_id = $1
   ORDER BY created_at ASC`,
  [roomId]
    );

    res.status(200).json({
      messages: messages.rows,
    });

  } catch (error) {

    console.log(error.message);

    res.status(500).json({
      message: "Server error",
    });

  }

};

module.exports = {
  getRoomMessages,
};