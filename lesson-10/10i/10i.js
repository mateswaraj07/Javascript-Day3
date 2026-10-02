let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;

  saveCalculation();
  displayCalculation();
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.calculation').innerHTML =
    calculation;
}

displayCalculation();