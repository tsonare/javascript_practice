var weightInPonds = document.getElementById('inputpounds').value;
function weightConverter(weightInPonds){
  var weightInKilogram = weightInPonds/2.2046;
  document.getElementById('outputkilogram').innerHTML = `${weightInKilogram}`;
}