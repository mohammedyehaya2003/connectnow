const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {

  try {

    const { name, email, password } =
      req.body;

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const newUser =
      await pool.query(
        `INSERT INTO users
         (name, email, password)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [
          name,
          email,
          hashedPassword,
        ]
      );

    const token = jwt.sign(
      {
        id:
          newUser.rows[0].id,

        email:
          newUser.rows[0].email,
      },

      "secretkey",

      {
        expiresIn:"1h",
      }
    );

    res.status(201).json({

      message:
        "User registered successfully ✅",

      token,

      user:
        newUser.rows[0],

    });

  } catch (error) {

    console.log(
      error.message
    );

    res.status(500).json({
      message:
        "Server error",
    });

  }

};



const loginUser = async (req, res) => {

  console.log(
    "LOGIN ROUTE HIT 🔥"
  );

  try {

    const { email, password } =
      req.body;

      console.log(
  "STEP 1"
);

    const user =
      await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );

      console.log(
  "STEP 2"
);


    if (user.rows.length === 0) {

      return res.status(400).json({
        message:
          "Invalid email or password",
      });

    }



try {

  const validPassword =
    await bcrypt.compare(
      String(password),
      String(user.rows[0].password)
    );

  console.log(
    "STEP 3"
  );

  if (!validPassword) {

    return res.status(400).json({
      message:
        "Invalid email or password",
    });

  }

} catch (err) {

  console.log(
    "BCRYPT ERROR:",
    err
  );

}



      

    if (!validPassword) {

      return res.status(400).json({
        message:
          "Invalid email or password",
      });

    }

    const token = jwt.sign(
      {
        id:
          user.rows[0].id,

        email:
          user.rows[0].email,
      },

      "secretkey",

      {
        expiresIn:"1h",
      }
    );

    res.status(200).json({

      message:
        "Login successful ✅",

      token,

      user:
        user.rows[0],

    });

  } catch (error) {

    console.log(
      error.message
    );

    res.status(500).json({
      message:
        "Server error",
    });

  }

};



module.exports = {

  registerUser,

  loginUser,

};