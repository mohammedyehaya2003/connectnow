const pool = require("../config/db");
const { get } = require("../routes/auth");

const createRoom = async (req, res) => {

  try {

    const {
  room_name,
  room_type,
  user_id
} = req.body;


console.log(
  "CREATE ROOM BACKEND:",
  req.body
);

    const newRoom = await pool.query(
  `INSERT INTO rooms
   (
     room_name,
     created_by,
     room_type
   )

   VALUES
   (
     $1,
     $2,
     $3
   )

   RETURNING *`,

  [
    room_name,
    user_id,
    room_type
  ]
);

    res.status(201).json({
      message: "Room created successfully ✅",
      room: newRoom.rows[0],
    });

  } catch (error) {

    console.log(error.message);

    res.status(500).json({
      message: "Server error",
    });

  }

};

const getRooms = async (req, res) => {

  try {

    const rooms = await pool.query(
      "SELECT * FROM rooms ORDER BY created_at DESC"
    );

    res.status(200).json({
      rooms: rooms.rows,
    });

  } catch (error) {

    console.log(error.message);

    res.status(500).json({
      message: "Server error",
    });

  }

};

const joinRoom = async (req, res) => {

  try {

    const { user_id, room_id } = req.body;

    const joinedRoom = await pool.query(
      `INSERT INTO room_members (user_id, room_id)
       VALUES ($1, $2)
       RETURNING *`,
      [user_id, room_id]
    );

    res.status(201).json({
      message: "Joined room successfully ✅",
      membership: joinedRoom.rows[0],
    });

  } catch (error) {

    console.log(error.message);

    res.status(500).json({
      message: "Server error",
    });

  }

};


module.exports = {
  createRoom,
  getRooms,
  joinRoom,
};