function computeLoan(){

  var amount = document.getElementById('amount').value;
  var interest_rate = document.getElementById('interest_rate').value;
  var months = document.getElementById('months').value;
  var interest = (amount * (interest_rate * .01) / months);
  var payment = ((amount / months) + interest).toFixed(2);
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","); 
  // here \B means to the boaundry and question mark finding that from what ever group it will be and the symbol of addition mariking the parenthisis along with string
  document.getElementById('payment').innerHTML = "Monthly payment = ₹ " + payment; 
}