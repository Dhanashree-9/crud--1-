Firebase CRUD Application

This is a simple Firebase-powered CRUD (Create, Read, Update, Delete) application built using HTML, CSS, and JavaScript. The application allows users to add, edit, delete, and view tasks. The data is stored and managed in Firebase Realtime Database.

Features
Add Task: Users can create a new task by providing a title and description.
Edit Task: Existing tasks can be edited by clicking the "Edit" button.
Delete Task: Users can remove a task from the database by clicking the "Delete" button.
View Tasks: All tasks are displayed on the right side of the page in a list, updated in real-time when changes are made.
Technologies Used
Firebase: For backend database (Realtime Database).
HTML: Markup language for structuring the webpage.
CSS: Styling for the page.
JavaScript: For handling CRUD operations, interacting with Firebase.
Vercel: Deployment platform for hosting the web application.
Prerequisites
To run this project locally, you need:

A Firebase account and Firebase project.
A Firebase Realtime Database configured.
Setup Instructions
1. Create a Firebase Project
Go to the Firebase Console.
Click on Add Project and follow the steps to create a new Firebase project.
After your project is created, go to the Database section and create a new Firebase Realtime Database.
2. Add Firebase SDK to Your Project
Go to the Firebase console, select your project, and navigate to Project Settings.
Under General, scroll to the Firebase SDK snippet section.
Copy the configuration details (API key, project ID, etc.).
Replace the firebaseConfig object in index.js with your Firebase configuration.
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
