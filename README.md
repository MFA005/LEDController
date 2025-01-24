# 🔴 🟢 🟡 **Arduino LED Control with Socket.io**  


A simple Node.js + Arduino project that lets you control LEDs using a web interface via **Socket.io**.  

## Features
- Control **Red, Green, and Yellow** LEDs from a webpage  
- Real-time communication using **Socket.io**  
- Arduino reads signals and turns LEDs on/off accordingly  

## Requirements  
- **Node.js** & **npm** installed  
- **Arduino board** (e.g., Uno)  
- **LEDs + Resistors**  
- USB cable for Arduino  

## **Setup**  
1. Clone the repo:  
   ```sh
   git clone https://github.com/your-repo.git  
   cd your-repo
   
2. Install dependencies:
  ```sh
   npm install
  ```

3. Connect Arduino to COM3 (or update the port in code)
   
5. Upload Arduino.ino to your board
   
6. Start the server:
  ```sh
    node server.js
  ```

6. Open http://localhost:3000 in your browser
