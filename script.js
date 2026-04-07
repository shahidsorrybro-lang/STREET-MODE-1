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