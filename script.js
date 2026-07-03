const products = [
  {name:"25 Diamond",price:"20 টাকা"},
  {name:"50 Diamond",price:"39 টাকা"},
  {name:"100 Diamond",price:"76 টাকা"},
  {name:"115 Diamond",price:"80 টাকা"},
  {name:"240 Diamond",price:"161 টাকা"},
  {name:"355 Diamond",price:"245 টাকা"},
  {name:"480 Diamond",price:"321 টাকা"},
  {name:"505 Diamond",price:"339 টাকা"},
  {name:"610 Diamond",price:"405 টাকা"},
  {name:"725 Diamond",price:"479 টাকা"},
  {name:"850 Diamond",price:"560 টাকা"},
  {name:"1090 Diamond",price:"720 টাকা"},
  {name:"1240 Diamond",price:"819 টাকা"},
  {name:"2530 Diamond",price:"1599 টাকা"},

  {name:"Weekly Lite",price:"43 টাকা"},
  {name:"Weekly",price:"161 টাকা"},
  {name:"2x Weekly",price:"321 টাকা"},
  {name:"3x Weekly",price:"479 টাকা"},
  {name:"4x Weekly",price:"640 টাকা"},
  {name:"5x Weekly",price:"795 টাকা"},
  {name:"Monthly",price:"849 টাকা"}
];

const container = document.getElementById("products");

products.forEach(item => {
  container.innerHTML += `
    <div class="product">
      <h3>${item.name}</h3>
      <h2>${item.price}</h2>

      <button onclick="window.open('https://wa.me/8801981571121?text='+encodeURIComponent('আমি '+item.name+' অর্ডার করতে চাই'),'_blank')">
        WhatsApp Order
      </button>

      <br><br>

      <button onclick="window.open('https://t.me/joydebtopupbd','_blank')">
        Telegram
      </button>
    </div>
  `;
});
