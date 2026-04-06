let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(product + " added to cart!");
}function orderNow(product){
  window.open("https://wa.me/919876543210?text=I want to buy " + product);
}