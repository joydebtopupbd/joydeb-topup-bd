import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const container = document.getElementById("products");

async function loadProducts() {
  container.innerHTML = "";

  try {
    const querySnapshot = await getDocs(
      collection(db, "Admin", "Admin", "products")
    );

    querySnapshot.forEach((doc) => {
      const item = doc.data();

      const card = document.createElement("div");
      card.className = "product";

      card.innerHTML = `
        <h3>${item.name}</h3>
        <h2>${item.price}</h2>

        <button class="wa-btn">WhatsApp Order</button>

        <br><br>

        <button class="tg-btn">Telegram</button>
      `;

      card.querySelector(".wa-btn").addEventListener("click", () => {
        const text = encodeURIComponent(`আমি ${item.name} অর্ডার করতে চাই`);
        window.open(`https://wa.me/8801981571121?text=${text}`, "_blank");
      });

      card.querySelector(".tg-btn").addEventListener("click", () => {
        window.open("https://t.me/joydebtopupbd", "_blank");
      });

      container.appendChild(card);
    });

  } catch (error) {
    console.error(error);

    container.innerHTML = `
      <h3 style="text-align:center;color:red;">
        Products লোড করা যায়নি।
      </h3>
    `;
  }
}

loadProducts();
