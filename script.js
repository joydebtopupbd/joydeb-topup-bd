const products = [

{
name:"25 Diamond",
price:"23"
},

{
name:"50 Diamond",
price:"39"
},

{
name:"100 Diamond",
price:"76"
},

{
name:"115 Diamond",
price:"80"
},

{
name:"240 Diamond",
price:"161"
},

{
name:"355 Diamond",
price:"248"
},

{
name:"480 Diamond",
price:"325"
},

{
name:"505 Diamond",
price:"339"
},

{
name:"610 Diamond",
price:"405"
},

{
name:"725 Diamond",
price:"479"
},

{
name:"850 Diamond",
price:"560"
},

{
name:"1090 Diamond",
price:"720"
},

{
name:"1240 Diamond",
price:"819"
},

{
name:"2530 Diamond",
price:"1599"
},


{
name:"Weekly Lite",
price:"43"
},

{
name:"Weekly Membership",
price:"161"
},

{
name:"Monthly Membership",
price:"849"
}

];



const container = document.getElementById("products");


if(container){


products.forEach(product=>{


let card=document.createElement("div");

card.className="product";


card.innerHTML=`

<h3>${product.name}</h3>

<h2>৳${product.price}</h2>


<button class="main-btn">
Order Now
</button>

`;



card.querySelector("button").onclick=function(){


localStorage.setItem(
"product",
product.name
);


localStorage.setItem(
"price",
product.price
);


window.location.href="checkout.html";


};



container.appendChild(card);



});


}
