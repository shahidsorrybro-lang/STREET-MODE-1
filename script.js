let cart = [];

function addToCart(product) {
  cart.push(product);
  alert(product + " added to cart!");
}function orderNow(product){
  window.open("https://wa.me/919876543210?text=I want to buy " + product);
}
function payNow(){
  var options = {
    "key": "rzp_live_SaCvpDZh3fWVVh",
    "amount": "79900", 
    "currency": "INR",
    "name": "Street Mode",
    "description": "T-Shirt Purchase",
    "handler": function (response){
        alert("Payment Successful ✅");
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}
function payNow(){
  alert("Button working ✅");
}