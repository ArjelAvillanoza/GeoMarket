import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhaCU3u8nsL6GCjb8W1ECHshRocvw3FBE",
  authDomain: "geomarket-1a733.firebaseapp.com",
  projectId: "geomarket-1a733",
  storageBucket: "geomarket-1a733.appspot.com",  // fix typo here
  messagingSenderId: "1088895616777",
  appId: "1:1088895616777:web:9127d4ed3ad37b2e5875d8",
  measurementId: "G-F75P7953J1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user.email);
    window.location.href = "admin.html";
  } else {
    console.log("No user is logged in.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Login successful:", userCredential.user.email);
          // Redirect handled by onAuthStateChanged
        })
        .catch((error) => {
          alert("Invalid login details! Try again.");
          console.error("Error during sign-in:", error.message);
        });
    } else {
      alert("Please enter both email and password.");
    }
  });
});
