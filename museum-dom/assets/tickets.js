const permanent = document.getElementById("type-permanent");
const temporary = document.getElementById("type-temporary");
const combined = document.getElementById("type-combined");

const radios = document.querySelectorAll('.tickets-section__input_radio');
const inputs = document.querySelectorAll('.tickets-section__amount');
const btns = document.querySelectorAll('.tickets-section__amount-btn');
const totalPrice = document.querySelector('.tickets-section__price-num');
let price = 0;

function calculate(type, basic, senior) {
  return (type * basic) + (type * senior / 2);
}

function setDataForModal(num) {
  selectTicketType.options[num].selected = true;
  inputsModal[0].value = inputs[0].value;
  inputsModal[1].value = inputs[1].value;
  overviewTicketType.innerText = selectTicketType.options[selectTicketType.selectedIndex].innerText;
  overviewPrice.innerText = price + '€';
}

function countPrice() {
  let i = 0;
  for (var radio of radios) {
    if (radio.checked) {
      price = calculate(radio.value, inputs[0].value, inputs[1].value);
      localStorage.setItem('radio-ticket-num', i);
      localStorage.setItem('basic-value', inputs[0].value);
      localStorage.setItem('senior-value', inputs[1].value);
      setDataForModal(i+1);
    }
    i++;
  }
  totalPrice.innerText = price;
}

function getFromLocaleStorage() {
  let radio = localStorage.getItem('radio-ticket-num');
  inputs[0].value = localStorage.getItem('basic-value');
  inputs[1].value = localStorage.getItem('senior-value');

  switch (radio) {
    case "0": permanent.checked = true; break;
    case "1": temporary.checked = true; break;
    case "2": combined.checked = true; break;
  }
}

for (var radio of radios) {
  radio.addEventListener('click', countPrice);
}
for (var btn of btns) {
  btn.addEventListener('click', countPrice);
}
getFromLocaleStorage();
countPrice();