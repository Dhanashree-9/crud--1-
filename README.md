# Firebase CRUD Application

A web application demonstrating CRUD (Create, Read, Update, Delete) operations using Firebase Realtime Database. Users can manage tasks with real-time updates. This project is built using HTML, CSS, and JavaScript and is deployed on Vercel.

## Features

- **Add Task**: Create a new task with a title and description.
- **View Tasks**: Displays all tasks in real-time.
- **Edit Task**: Update an existing task's title and description.
- **Delete Task**: Remove tasks from the database.


## Technologies Used

- **Firebase Realtime Database**: Backend for storing and managing task data.
- **HTML, CSS, JavaScript**: Frontend technologies for the user interface.

Set up Firebase:

Go to the Firebase Console.
Create a new project and enable the Realtime Database.
Obtain your Firebase project configuration from Project Settings > General > Firebase SDK snippet.
Update Firebase Configuration: In the index.js file, replace the placeholder values with your Firebase project details:


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};
Run the Application: Open the index.html file in your browser to see the app.

How It Works
Create: Add a new task by filling out the form and clicking "Save".
Read: View all tasks displayed dynamically on the page.
Update: Edit a task by clicking the "Edit" button, updating the fields, and saving.
Delete: Remove a task by clicking the "Delete" button.
