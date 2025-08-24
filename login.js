// Firebase Imports
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBhaCU3u8nsL6GCjb8W1ECHshRocvw3FBE",
  authDomain: "geomarket-1a733.firebaseapp.com",
  projectId: "geomarket-1a733",
  storageBucket: "geomarket-1a733.firebasestorage.app",
  messagingSenderId: "1088895616777",
  appId: "1:1088895616777:web:9127d4ed3ad37b2e5875d8",
  measurementId: "G-F75P7953J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submission for login
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Sign in using Firebase Authentication
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = "admin.html"; // Redirect on success
      })
      .catch((error) => {
        alert("Invalid login details! Try again."); // Handle error
        console.error("Error during sign-in:", error.message);
      });
  });
});
