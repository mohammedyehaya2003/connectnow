# ConnectNow — Real-Time Chat Platform

## 📌 Project Overview

ConnectNow is a real-time chat platform where users can:

* Register and login securely
* Join chat rooms
* Send messages in real time
* View online users
* Share images
* Experience live communication using Socket.io

---

# 🚀 Day 1 Progress

Today, I completed the backend foundation setup.

## ✅ Completed Tasks

* Initialized Node.js backend project
* Installed backend packages:

  * Express.js
  * CORS
  * dotenv
  * PostgreSQL (pg)
  * bcrypt
  * jsonwebtoken
  * Socket.io
* Created professional backend folder structure
* Built first Express server
* Configured middleware
* Started backend server on port 5000
* Tested backend successfully in browser

---

## 📚 Key Concepts Learned

| Concept        | Simple Meaning                             |
| -------------- | ------------------------------------------ |
| npm init       | Creates and initializes Node.js project    |
| package.json   | Stores project configuration and packages  |
| Express.js     | Framework used to build backend server     |
| CORS           | Allows frontend and backend to communicate |
| express.json() | Reads JSON data from frontend requests     |
| app.get()      | Creates API route                          |
| app.listen()   | Starts backend server                      |
| localhost:5000 | Local backend server URL                   |


🚀 Day 2 Progress

- Created PostgreSQL database called `connectnow`
- Designed complete relational database architecture
- Created 4 production-level tables:
  - users
  - rooms
  - room_members
  - messages
- Connected Node.js backend with PostgreSQL
- Configured environment variables using `.env`
- Successfully tested PostgreSQL connection from backend server

🧠 What I Learned

- What is PostgreSQL
- How relational databases work
- What are tables and foreign keys
- How backend connects with database
- What is `.env` and why it is used
- How `pg Pool` manages database connections
- How to structure backend database configuration professionally

✅ Current Project Status

- Backend server running successfully
- PostgreSQL connected successfully
- Database architecture completed
- Ready to build authentication system next


🚀 Day 3 Progress

- Created authentication route and controller
- Built User Registration API endpoint
- Connected API with PostgreSQL database
- Successfully inserted users into database
- Added password hashing using bcrypt
- Implemented JWT token generation
- Tested Register API successfully using Postman
- Prevented duplicate email registration using UNIQUE constraint

🧠 What I Learned

- How authentication systems work
- What is bcrypt and why password hashing is important
- Difference between plain password and hashed password
- What is JWT authentication
- How API routes connect with controllers
- How backend sends JSON responses
- How to test APIs using Postman
- How databases prevent duplicate data using UNIQUE constraints

✅ Current Project Status

- Backend server running successfully
- PostgreSQL connected successfully
- User registration system completed
- Secure password hashing implemented
- JWT authentication token generation working
- Ready to build Login API next

🚀 Day 4 Progress

- Built Login Authentication API
- Verified user email from PostgreSQL database
- Compared encrypted passwords using bcrypt.compare()
- Generated JWT token during login
- Created custom authentication middleware
- Protected private API routes using JWT verification
- Successfully tested protected routes using Postman Headers
- Implemented token-based authorization system

🧠 What I Learned

- Difference between authentication and authorization
- How login systems work in backend applications
- How bcrypt.compare() verifies hashed passwords
- How JWT tokens are verified using middleware
- What are protected/private routes
- How middleware works in Express.js
- How request headers are used for authentication
- How backend grants or denies access using tokens

✅ Current Project Status

- User Registration API completed
- Login Authentication API completed
- Password hashing and verification working
- JWT authentication system fully functional
- Protected route system implemented
- PostgreSQL integration working successfully
- Backend authentication architecture completed
- Ready to build Room System next

🚀 Day 5 Progress

- Built Create Room API endpoint
- Successfully stored chat rooms in PostgreSQL database
- Built Get All Rooms API endpoint
- Fetched all available chat rooms from database
- Built Join Room API endpoint
- Connected users and rooms using room_members relational table
- Successfully tested all Room APIs using Postman
- Implemented relational room membership architecture

🧠 What I Learned

- How chat room systems work in backend applications
- How relational tables connect users and rooms
- How INSERT and SELECT queries work in PostgreSQL
- What is room membership architecture
- How backend manages many-to-many relationships
- How APIs fetch and store room data
- How scalable chat systems organize rooms and users

✅ Current Project Status

- User Authentication System completed
- JWT Authorization Middleware completed
- Protected Routes implemented
- Room Creation System completed
- Get All Rooms API completed
- Room Membership System completed
- PostgreSQL relational architecture working successfully
- Ready to build Real-Time Messaging System next

🚀 Day 6 Progress

- Installed and configured Socket.io
- Converted Express server into Socket.io real-time server
- Built modular socket architecture
- Created joinRoom socket event
- Created sendMessage socket event
- Implemented real-time room-based message broadcasting
- Connected Socket.io with PostgreSQL database
- Stored chat messages in messages table
- Built Get Room Messages API
- Successfully fetched room chat history from PostgreSQL

🧠 What I Learned

- How Socket.io works for real-time communication
- Difference between HTTP APIs and Socket events
- How socket rooms work in chat applications
- How real-time message broadcasting works
- How to store messages from sockets into PostgreSQL
- How modular socket architecture is organized
- How backend fetches previous chat history

✅ Current Project Status

- Authentication System completed
- JWT Authorization completed
- Room System completed
- Room Membership System completed
- Real-Time Socket.io Server completed
- Message Broadcasting System completed
- PostgreSQL Message Storage completed
- Chat History API completed
- Backend real-time architecture working successfully
- Ready for Frontend Integration next