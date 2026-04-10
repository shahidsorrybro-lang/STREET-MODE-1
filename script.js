// =====================
// CART SYSTEM
// =====================

// Get cart from storage OR create new
function getCart(){
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart
function saveCart(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
}

// =====================
// ADD TO CART
// =====================
function addToCart(product, price){
  let cart = getCart();

  cart.push({
    name: product,
    price: price
  });

  saveCart(cart);

  alert(product + " added to cart 🛒");
}

// =====================
// BUY WITH SIZE
// =====================
function buyProduct(product, price, sizeId){
  let size = document.getElementById(sizeId).value;

  if(size === ""){
    alert("Please select size ❌");
    return;
  }

  alert(product + " (" + size + ") added to cart 🛒");

  addToCart(product + " (" + size + ")", price);
}

// =====================
// VIEW CART PAGE
// =====================
function viewCart(){
  window.location.href = "cart.html";
}

// =====================
// DIRECT BUY (WHATSAPP)
// =====================
function orderNow(product){
  window.open("https://wa.me/919876543210?text=I want to buy " + product);
}

// =====================
// PAYMENT (RAZORPAY)
// =====================
function payNow(product, price){
  var options = {
    "key": "rzp_live_SaCvpDZh3fWVVh", // your key
    "amount": price * 100,
    "currency": "INR",
    "name": "Street Mode",
    "description": product,
    "handler": function (){
      alert(product + " Payment Successful ✅");
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}