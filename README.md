**Time Tracking App Documentation**

**Table of Contents**
Introduction
Installation and Setup
Running the Application
API Endpoints

**1. Introduction**
The Time Tracking App is a web application built using Node.js and React.js. It allows users to create, retrieve, update, and delete time entries for different tasks. The application uses a MySQL database to store the time entry data.

This documentation provides instructions on how to install and set up the application, as well as details about the API endpoints available for interacting with the time entries.

**2. Installation and Setup**
To set up the Time Tracking App, follow the steps below:

**Prerequisites**
Node.js (version 12 or higher) and npm (Node Package Manager)
MySQL database server (e.g., MySQL Workbench)

**Step 1: Clone the Repository**
Clone the repository from GitHub using the following command:
git clone <repository_url>

**Step 2: Install Dependencies**
Navigate to the project directory and install the required dependencies for both the server-side and client-side of the application. Run the following command:
cd time-tracking-app
npm install

**Step 3: Configure the Database**
Create a MySQL database named timetrackingdb using a database management tool like MySQL Workbench. Then, create a table named time_entries with the following schema:


CREATE TABLE time_entries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  task VARCHAR(255),
  startTime DATETIME,
  endTime DATETIME
);
**Step 4: Configure Server**
Open the server.js file located in the time-tracking-app directory. Modify the database connection details (host, user, password) based on your MySQL database configuration.


// index.js

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'timetrackingdb',
  connectionLimit: 10
});

**3. Running the Application**
To run the Time Tracking App, follow these steps:

**Step 1: Start the Server**
In the time-tracking-app directory, run the following command to start the server:

node index.js
The server will start running on http://localhost:5000.

**Step 2: Start the Client**
In a new terminal window, navigate to the time-tracking-app directory and run the following command to start the client:


npm start
The client will be launched in your default web browser at http://localhost:3000.

**4. API Endpoints**
The Time Tracking App provides the following API endpoints for managing time entries:

POST /time-entries: Create a new time entry.
GET /time-entries: Get a list of all time entries.
GET /time-entries/:id: Get a specific time entry by ID.
PUT /time-entries/:id: Update a specific time entry by ID.
DELETE /time-entries/:id: Delete a specific time entry by ID.
Make HTTP requests to these endpoints using tools like cURL, Postman, or any other API testing tool.

Please note that the server is configured to allow requests from http://localhost:3000 to avoid Cross-Origin Resource Sharing (CORS) issues. If you're running the client on a different URL or port, modify the server's `res.setHeader.
