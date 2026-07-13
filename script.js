// ================================
// Joydeb Topup BD
// script.js (Part 1)
// ================================

const products = [

{ name:"25 Diamond", price:23 },
{ name:"50 Diamond", price:39 },
{ name:"100 Diamond", price:76 },
{ name:"115 Diamond", price:80 },
{ name:"240 Diamond", price:161 },
{ name:"355 Diamond", price:248 },
{ name:"480 Diamond", price:325 },
{ name:"505 Diamond", price:339 },
{ name:"610 Diamond", price:405 },
{ name:"725 Diamond", price:479 },
{ name:"850 Diamond", price:560 },
{ name:"1090 Diamond", price:720 },
{ name:"1240 Diamond", price:819 },
{ name:"2530 Diamond", price:1599 },

{ name:"Weekly Lite", price:43 },
{ name:"Weekly Membership", price:161 },
{ name:"Monthly Membership", price:849 }

];

const container = document.getElementById("products");

if(container){

products.forEach(product=>{

const card=document.createElement("div");

card.className="product";

card.innerHTML=`
<h3>${product.name}</h3>

<h2>৳${product.price}</h2>

<button class="main-btn">
Order Now
</button>
`;

card.querySelector("button").onclick=()=>{

localStorage.setItem("product",product.name);

localStorage.setItem("price",product.price);

window.location.href="checkout.html";

};

container.appendChild(card);

});

}// ================================
// script.js (Part 2)
// ================================

// Banner Slider

const banner = document.getElementById("bannerSlide");

if (banner) {

const banners = [

"images/banner1.jpg",

"images/banner2.jpg",

"images/banner3.jpg"

];

let current = 0;

setInterval(() => {

current++;

if (current >= banners.length) {

current = 0;

}

banner.src = banners[current];

}, 3000);

}


// Wallet Balance

if (localStorage.getItem("wallet") == null) {

localStorage.setItem("wallet", 0);

}

function getWalletBalance() {

return Number(localStorage.getItem("wallet"));

}

function updateWalletText() {

const balance = getWalletBalance();

document.querySelectorAll(".wallet-balance").forEach(item => {

item.innerHTML = "৳" + balance;

});

}

updateWalletText();// ================================
// script.js (Part 3)
// ================================

// Add Money

function addMoney(amount){

amount = Number(amount);

let wallet = Number(localStorage.getItem("wallet") || 0);

wallet += amount;

localStorage.setItem("wallet", wallet);

updateWalletText();

alert("৳" + amount + " সফলভাবে Wallet-এ যোগ হয়েছে");

}

// Save Order

function saveOrder(product, price, uid){

let orders = JSON.parse(localStorage.getItem("orders") || "[]");

orders.unshift({

product: product,

price: price,

uid: uid,

status: "Pending",

date: new Date().toLocaleString()

});

localStorage.setItem("orders", JSON.stringify(orders));

}

// Show Orders

function loadOrders(){

const orderBox = document.getElementById("orders-list");

if(!orderBox) return;

const orders = JSON.parse(localStorage.getItem("orders") || "[]");

orderBox.innerHTML = "";

if(orders.length===0){

orderBox.innerHTML = "<p>No Orders Found</p>";

return;

}

orders.forEach(order=>{

orderBox.innerHTML += `
<div class="order-box">

<h3>${order.product}</h3>

<p>Price: ৳${order.price}</p>

<p>UID: ${order.uid}</p>

<p class="pending">${order.status}</p>

<small>${order.date}</small>

</div>
`;

});

}

loadOrders();
