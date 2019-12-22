console.log("Connection made!")

const colorBtn = document.querySelector('.colorBtn');
const bodyColorChange = document.querySelector('body');

colorBtn.addEventListener('click', function(e) {
   let randomNumber = '#';
   randomNumber += Math.floor(100000 + Math.random() * 900000);
   bodyColorChange.style.background = randomNumber;
   e.preventDefault();
});