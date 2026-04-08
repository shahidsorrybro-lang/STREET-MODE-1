let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(product + " added to cart!");
}function orderNow(product){
  window.open("https://wa.me/919876543210?text=I want to buy " + product);
}
function payNow(product, price){
  var options = {
    "key": "rzp_live_SaCvpDZh3fWVVh",
    "amount": price * 100,
    "currency": "INR",
    "name": "Street Mode",
    "description": product,
    "handler": function (response){
        alert(product + " Payment Successful ✅");
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}

function buyProduct(product, price, sizeId){
  var size = document.getElementById(sizeId).value;

  if(size === ""){
    alert("Please select size ❌");
    return;
  }

  var options = {
    "key": "rzp_live_SaCvpDZh3fWVVh",
    "amount": price * 100,
    "currency": "INR",
    "name": "Street Mode",
    "description": product + " - Size: " + size,
    "handler": function (response){
        alert(product + " (" + size + ") Payment Successful ✅");
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}
function openProduct(name, price){
  localStorage.setItem("productName", name);
  localStorage.setItem("productPrice", price);
  window.location.href = "product.html";
}
let cart = [];

function addToCart(product, price){
  cart.push({name: product, price: price});
  alert(product + " added to cart 🛒");
}
function viewCart(){
  let text = "Your Cart:\n";
  let total = 0;

  cart.forEach(item => {
    text += item.name + " - ₹" + item.price + "\n";
    total += item.price;
  });

  text += "\nTotal: ₹" + total;

  alert(text);
}