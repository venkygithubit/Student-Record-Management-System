# Project Description:-
The Student Record Management System is a full-stack web application that stores, manages, and maintains student academic records efficiently. The system enables users to add,
view, update, and delete student details like college registration number, student name, rank, and section through an easy-to-use web interface.The frontend is built with HTML
, CSS, and JavaScript. It features an interactive form and a dynamic table that displays student records. The backend uses Node.js and Express.js, which provides RESTful APIs 
to manage CRUD (Create, Read, Update, Delete) operations. MongoDB Atlas serves as the cloud database for permanent storage of student information, while Mongoose handles schema
definition and database interaction.When a user submits data through the web page, the information goes to the backend via the Fetch API. The Express server processes this
information and stores it securely in MongoDB Atlas. The application fetches existing student records from the database and displays them on the web page, ensuring data 
persistence even after a page refresh. Edit and delete actions are synchronized between the user interface and the database, which keeps everything consistent.This project 
showcases a complete integration of frontend and backend technologies without relying on frontend frameworks. It is ideal for learning the fundamental concepts of full-stack
development.

# Technologies Used:-
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB Atlas
ODM: Mongoose
API Communication: Fetch API
Tools: VS Code, MongoDB Compass, Postman (for testing)

# Key Features
1)Add new student records
2)View all student records
3)Edit existing student details
4)Delete student records
5)Data stored permanently in MongoDB Atlas
6)Dynamic UI updates without page reload


# How to Run the Project:-

1)Install Backend Dependencies
npm install (express,nodemon,dotenv,mongodb,mongoose,bosy-parser,cors)

2)Configure Environment Variables
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string

3)Start the Backend Server
npm start

4)The server will run at:

http://localhost:5000

