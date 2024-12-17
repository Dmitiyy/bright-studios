const timerDisplay = document.getElementById('timer');
const firstHeader = document.querySelector('.first-header');
const secondHeader = document.querySelector('.second-header');
const firstFooter = document.querySelector('.first-footer');
const secondFooter = document.querySelector('.second-footer');

let countdown;
let timerDuration = 90; 

function startTimer() {
  let timeLeft = timerDuration;

  updateDisplay(timeLeft);
  clearInterval(countdown);

  countdown = setInterval(() => {
    timeLeft--;
    updateDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdown);
      swapHeadersAndFooters();
      startTimer(); 
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timerDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function swapHeadersAndFooters() {
  firstHeader.classList.toggle('visible');
  firstHeader.classList.toggle('hidden');
  secondHeader.classList.toggle('visible');
  secondHeader.classList.toggle('hidden');
  
  firstFooter.classList.toggle('visible');
  firstFooter.classList.toggle('hidden');
  secondFooter.classList.toggle('visible');
  secondFooter.classList.toggle('hidden');
}

startTimer();

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    goUpButton.classList.add('visible');
  } else {
    goUpButton.classList.remove('visible');
  }
});

goUpButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
