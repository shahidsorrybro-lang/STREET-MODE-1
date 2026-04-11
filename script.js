function getCart(){
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product, price){
  let cart = getCart();

  cart.push({
    name: product,
    price: price
  });

  saveCart(cart);
}

function buyProduct(product, price, sizeId){
  let size = document.getElementById(sizeId).value;

  if(size === ""){
    alert("Select size ❌");
    return;
  }

  addToCart(product + " (" + size + ")", price);
  alert("Added to cart 🛒");
}

function viewCart(){
  window.location.href = "cart.html";
}