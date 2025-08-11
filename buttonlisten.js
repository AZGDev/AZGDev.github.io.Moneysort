const add1 = document.getElementById('add1');
const add10 = document.getElementById('add10');
const add100 = document.getElementById('add100');
const add1000 = document.getElementById('add1000');
const rem1 = document.getElementById('rem1');
const rem10 = document.getElementById('rem10');
const rem100 = document.getElementById('rem100');
const rem1000 = document.getElementById('rem1000');
const curXch = document.getElementById('CurXch');

const values = ["Euros", "Rons", "Hufs", "Dollars" ];
let index = 0;
currency = values[index];

function nextValue() {
  index++;
  if (index >= values.length) {
    index = 0;
  }
  currency = values[index];
}
window.onload = () => {
  const savedMoney = localStorage.getItem('money');
  if (savedMoney !== null) {
    money = parseInt(savedMoney);
  }

  const savedCurrencyIndex = localStorage.getItem('currencyIndex');
  if (savedCurrencyIndex !== null) {
    index = parseInt(savedCurrencyIndex);
    currency = values[index];
  }
};
// Add money
add1.addEventListener('click', () => money += 1);
add10.addEventListener('click', () => money += 10);
add100.addEventListener('click', () => money += 100);
add1000.addEventListener('click', () => money += 1000);

// Remove money
rem1.addEventListener('click', () => money -= 1);
rem10.addEventListener('click', () => money -= 10);
rem100.addEventListener('click', () => money -= 100);
rem1000.addEventListener('click', () => money -= 1000);

// Change currency
curXch.addEventListener('click', () => nextValue());

// Update display every 100ms
setInterval(() => {
  if (money < 0) money = 0;
  
  document.getElementById('money').textContent = money;
  document.getElementById('currency').textContent = currency;
    localStorage.setItem('money', money);
  localStorage.setItem('currencyIndex', index);
}, 100);
