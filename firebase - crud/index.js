import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  remove,
  update,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkNPTniaLWLsE1rQNeM4y6NwcINFkYhjU",
  authDomain: "crud-20717.firebaseapp.com",
  databaseURL: "https://crud-20717-default-rtdb.firebaseio.com", // Realtime Database URL
  projectId: "crud-20717",
  storageBucket: "crud-20717.appspot.com",
  messagingSenderId: "432936741333",
  appId: "1:432936741333:web:7dc7a02c318418a052755c",
  measurementId: "G-D66S38QFRP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// DOM Elements
const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");
const btnCancel = document.getElementById("btn-task-cancel");

let editStatus = false;
let currentTaskId = "";

// Save Task to Realtime Database
const saveTask = (title, description) => {
  const newTaskRef = ref(db, "tasks/" + Date.now()); // Unique ID based on timestamp
  set(newTaskRef, {
    title: title,
    description: description,
  });
};

// Get All Tasks from Realtime Database
const getTasks = async () => {
  const tasksRef = ref(db, "tasks/");
  const snapshot = await get(tasksRef);
  return snapshot.val();
};

// Delete Task from Realtime Database
const deleteTask = (id) => {
  const taskRef = ref(db, "tasks/" + id);
  remove(taskRef);
};

// Update Task in Realtime Database
const updateTask = (id, newFields) => {
  const taskRef = ref(db, "tasks/" + id);
  update(taskRef, newFields);
};

// Display Tasks on Load
window.addEventListener("DOMContentLoaded", async () => {
  await loadTasks();  // Load tasks on page load
  
  // Attach event listeners for delete and edit buttons dynamically
  tasksContainer.addEventListener("click", async (e) => {
    if (e.target.classList.contains("btn-delete")) {
      const taskId = e.target.dataset.id;
      await deleteTask(taskId);
      await loadTasks(); // Reload tasks after deletion
    }

    if (e.target.classList.contains("btn-edit")) {
      const taskId = e.target.dataset.id;
      const tasks = await getTasks();
      const task = tasks[taskId];
      
      taskForm["task-title"].value = task.title;
      taskForm["task-description"].value = task.description;

      // Set the status for editing
      editStatus = true;
      currentTaskId = taskId;
      taskForm["btn-task-form"].innerText = "Update"; // Change button text to Update
    }
  });
});

// Form Submission (Create or Update)
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = taskForm["task-title"].value.trim();
  const description = taskForm["task-description"].value.trim();

  if (!title || !description) return alert("Please complete the form.");

  if (!editStatus) {
    // If not editing, create new task
    await saveTask(title, description);
  } else {
    // If editing, update existing task
    await updateTask(currentTaskId, { title, description });
    editStatus = false;
    currentTaskId = "";
    taskForm["btn-task-form"].innerText = "Save"; // Reset button text to Save
  }

  taskForm.reset();
  await loadTasks(); // Reload tasks after save or update
});

// Cancel Button
btnCancel.addEventListener("click", () => {
  taskForm.reset();
  editStatus = false;
  currentTaskId = "";
  taskForm["btn-task-form"].innerText = "Save"; // Reset to Save when cancel
});

// Function to Reload Tasks from Firebase
const loadTasks = async () => {
  const tasks = await getTasks();
  tasksContainer.innerHTML = ""; // Clear current tasks container
  
  if (tasks) {
    Object.entries(tasks).forEach(([id, task]) => {
      tasksContainer.innerHTML += `
        <div class="card card-body shadow mt-2">
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <div>
            <button class="btn btn-danger btn-delete" data-id="${id}">
              🗑 Delete
            </button>
            <button class="btn btn-secondary btn-edit" data-id="${id}">
              🖉 Edit
            </button>
          </div>
        </div>
      `;
    });
  }
};
