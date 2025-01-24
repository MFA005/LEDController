const { createServer } = require("http");

const express = require('express');
const path = require('path');
const app = express();
const httpServer = createServer(app); // Use httpServer here
const { Server } = require("socket.io");
const io = new Server(httpServer); // Bind socket.io to httpServer
const port = 3000;

// Import arduino interface functions
const { sendRedSignalToArduino, sendGreenSignalToArduino, sendYellowSignalToArduino, sendOffSignalToArduino } = require('./arduino-interface');

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Using httpServer.listen to start the server
httpServer.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Handling socket connections
io.on("connection", (socket) => {
  console.log('User connected');

  // Handle socket events
  socket.on('red', sendRedSignalToArduino);
  socket.on('green', sendGreenSignalToArduino);
  socket.on('yellow', sendYellowSignalToArduino);
  socket.on('off', sendOffSignalToArduino);
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});