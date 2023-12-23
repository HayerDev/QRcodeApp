# QR Code Generator

## Overview
QR Code Generator is a full-stack web application that allows users to generate QR codes from URLs and view a list of all generated QR codes. Users can create QR codes, view them in an overlay, and see a list of all previously generated QR codes with the option to delete them individually or all at once.

## Features
- Generate QR codes from URLs.
- View generated QR code in an overlay.
- List all generated QR codes.
- Delete individual QR codes.
- Delete all QR codes at once.

## Technologies Used
- Frontend: React
- Backend: Node.js, Express.js
- Database: MongoDB

## Setup and Installation

### Prerequisites
- Node.js
- MongoDB

### Installation Steps
1. Clone the repository:\
	git clone https://github.com/HayerDev/QRcodeApp.git

2. Install backend dependencies:\
	cd server\
	npm install

3. Start the MongoDB server (ensure MongoDB is installed and properly set up on your system).

4. Start the backend server:\
	node server

5. Install frontend dependencies:\
	cd ../client\
	npm install

6. Start the React development server:\
	npm start

7. The application should now be running on http://localhost:3000.

## Usage
- Navigate to http://localhost:3000 in your browser.
- Enter a URL in the provided text field and click "Generate QR Code" to create a new QR code.
- Click on a QR code URL in the list to view the QR code.
- Use the "Delete" button next to each QR code or the "Delete All" button to remove QR codes.

## API Endpoints
- POST /generate: Generate a new QR code.
- GET /allqrcodes: Retrieve all generated QR codes.
- DELETE /deleteqrcode/:id: Delete a specific QR code.
- DELETE /deleteallqrcodes: Delete all QR codes.