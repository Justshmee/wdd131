const form = document.getElementById('cardForm');
const errorsEl = document.querySelector('.errors');

function isCardNumberValid(number) {
  const digits = number.replace(/\s+/g, '');
  return digits === '1234123412341234';
}

function isExpired(month, year) {
  const m = parseInt(month, 10);
  const y = parseInt(year, 10);
  if (isNaN(m) || isNaN(y) || m < 1 || m > 12) return true;
  const now = new Date();
  const thisYear = now.getFullYear() % 100; // two digits
  const thisMonth = now.getMonth() + 1;
  if (y < thisYear) return true;
  if (y === thisYear && m < thisMonth) return true;
  return false;
}

function displayError(msg) {
  errorsEl.textContent = msg;
}

function submitHandler(e) {
  e.preventDefault();
  displayError('');
  let errorMsg = '';

  const number = document.getElementById('cardNumber').value.trim();
  const month = document.getElementById('month').value.trim();
  const year = document.getElementById('year').value.trim();
  const cvc = document.getElementById('cvc').value.trim();

  if (!/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/.test(number)) {
    errorMsg += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(number)) {
    errorMsg += 'Card number is not valid\n';
  }

  if (isExpired(month, year)) {
    errorMsg += 'Card is expired\n';
  }

  if (!/^\d{3}$/.test(cvc)) {
    errorMsg += 'CVC must be 3 digits\n';
  }

  if (errorMsg) {
    displayError(errorMsg);
    return;
  }

  document.querySelector('main').innerHTML = '<h2>✅ Payment successful. Thank you!</h2>';
}

form.addEventListener('submit', submitHandler);

const numberInput = document.getElementById('cardNumber');
numberInput.addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 16) value = value.slice(0, 16);
  const parts = [];
  for (let i = 0; i < value.length; i += 4) {
    parts.push(value.slice(i, i + 4));
  }
  e.target.value = parts.join(' ');
});
