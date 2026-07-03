import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8WTR_OuyUbfIFe7F0tWc7PygwgSl3SVE",
  authDomain: "joydeb-topup-bd.firebaseapp.com",
  projectId: "joydeb-topup-bd",
  storageBucket: "joydeb-topup-bd.firebasestorage.app",
  messagingSenderId: "295962899771",
  appId: "1:295962899771:web:b12c374a7d8b8f406e331e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
