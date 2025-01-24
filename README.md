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
**1.** Clone the repo:  
   ```sh
   git clone https://github.com/mfa005/LEDController.git  
   cd your-repo
   ```   
**2.** Install dependencies:
     ```
   npm install
     ```

**3.** Connect Arduino to COM3 (or update the port in code)
   
**4.** Upload Arduino.ino to your board
   
**5.** Start the server:
     ```
    node server.js
     ```

**6.** Open ``http://localhost:3000`` in your browser

## How It Works

### Frontend (HTML + JS + CSS)
- Sends commands (`red`, `green`, `yellow`, `off`) to the server via Socket.io  
- Updates the background color to match the selected LED  

### Backend (Node.js + Express + Socket.io)
- Listens for events and sends signals to Arduino  

### Arduino Code
- Reads incoming serial data and toggles LEDs accordingly  

