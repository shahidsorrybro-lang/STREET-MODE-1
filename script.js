// 🛒 CART SYSTEM
let cart = [];

// ➕ ADD TO CART
function addToCart(product, price){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({name: product, price: price});

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(product + " added to cart 🛒");
}

// 👀 VIEW CART
function viewCart(){
  let text = "Your Cart:\n";
  let total = 0;

  if(cart.length === 0){
    alert("Cart is empty 🛒");
    return;
  }

  cart.forEach(item => {
    text += item.name + " - ₹" + item.price + "\n";
    total += item.price;
  });

  text += "\nTotal: ₹" + total;

  alert(text);
}

// 💳 BUY WITH SIZE + PAYMENT
function buyProduct(product, price, sizeId){
  let size = document.getElementById(sizeId).value;

  if(size === ""){
    alert("Please select size ❌");
    return;
  }

  var options = {
    "key": "rzp_live_SaCvpDZh3fWVVh", // 🔁 replace with your real key
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

// 📦 OPEN PRODUCT PAGE
function openProduct(name, price){
  localStorage.setItem("productName", name);
  localStorage.setItem("productPrice", price);
  window.location.href = "product.html";
}