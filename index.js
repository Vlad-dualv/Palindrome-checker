const textInput = document.getElementById('text-input');
const result = document.getElementById('result');
const checkBtn = document.getElementById('check-btn');

function main() {
  const textValue = textInput.value.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  const reversedValue = textValue.split('').reverse().join('');
  if (textValue === '') {
    window.alert('Please input a value');
  } else if (textValue === reversedValue) {
    result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome.`;
  } else {
    result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome.`;
  }
}

checkBtn.addEventListener('click', main);
textInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    main();
  }
});
