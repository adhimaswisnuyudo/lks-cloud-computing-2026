# CRUD Node.js + MySQL with Premium GUI & System Monitor

A complete full-stack web application featuring a classic CRUD (Create, Read, Update, Delete) system for user management and a real-time hardware system monitor. Built with Node.js, Express, Sequelize (MySQL), and rendered with EJS.

## 🚀 Features

- **User Management (CRUD):** 
  - Add, list, edit, and delete users.
  - Modern data table layout.
  - Interactive forms with focus states.
- **Real-Time System Monitor:**
  - Visual dashboard for server resource monitoring.
  - Displays OS info, CPU utilization, RAM usage, and Disk space.
  - Updates automatically every 2 seconds without page refresh.
- **Premium UI/UX:**
  - Clean layout with glassmorphism effects.
  - Responsive design.
  - Micro-animations and hover effects.
  - Google Font (Inter) integration.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MySQL, Sequelize ORM
- **Frontend:** EJS (Embedded JavaScript), Vanilla CSS
- **System Metrics:** `systeminformation` package

## 📋 Prerequisites

- **Node.js** (v14 or higher recommended)
- **MySQL** installed and running
- A database named `db_lks2026` created in your MySQL server.

## ⚙️ Installation & Setup

1. **Clone or copy the project files.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Database Configuration:**
   Open `config/db.js` and adjust your database credentials:
   ```javascript
   const sequelize = new Sequelize('db_lks2026', 'USERNAME', 'PASSWORD', {
     host: 'localhost',
     dialect: 'mysql'
   });
   ```
4. **Create the Database:**
   Ensure the database exists in MySQL before running the app:
   ```sql
   CREATE DATABASE db_lks2026;
   ```

## 🏃‍♂️ Running the Application

Start the server using the following command:

```bash
node app.js
```

The application will be running at `http://localhost:3000`.
Sequelize will automatically create the `Users` table on the first successful connection.

## 📁 Project Structure

```text
├── config/
│   └── db.js          # Database connection configuration
├── models/
│   └── user.js        # Sequelize User model
├── public/
│   └── css/
│       └── style.css  # Premium stylesheet
├── views/
│   ├── index.ejs      # Dashboard / User list page
│   ├── form.ejs       # Add user form
│   ├── edit.ejs       # Edit user form
│   └── system.ejs     # Real-time system monitor page
├── app.js             # Main application entry point
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

---
*Created as part of the LKS Kota / Cloud Computing preparation.*
