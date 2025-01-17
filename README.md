# Firebase CRUD Application

A web application demonstrating CRUD (Create, Read, Update, Delete) operations using Firebase Realtime Database. Users can manage tasks with real-time updates. This project is built using HTML, CSS, and JavaScript and is deployed on Vercel.

## Features

- **Add Task**: Create a new task with a title and description.
- **View Tasks**: Displays all tasks in real-time.
- **Edit Task**: Update an existing task's title and description.
- **Delete Task**: Remove tasks from the database.

## Demo

Check out the live demo of the project [here](#). *(Replace `#` with the link to your Vercel deployment.)*

## Technologies Used

- **Firebase Realtime Database**: Backend for storing and managing task data.
- **HTML, CSS, JavaScript**: Frontend technologies for the user interface.
- **Vercel**: Hosting platform for deployment.

## Installation and Setup

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/firebase-crud-app.git
   cd firebase-crud-app
Set up Firebase:

Go to the Firebase Console.
Create a new project and enable the Realtime Database.
Obtain your Firebase project configuration from Project Settings > General > Firebase SDK snippet.
Update the Firebase configuration in index.js:

javascript
Copy
Edit
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
Open the index.html file in your browser to see the app.




