const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Set the countdown target date
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 250);
countdownDate.setHours(countdownDate.getHours() + 23);
countdownDate.setMinutes(countdownDate.getMinutes() + 33);
countdownDate.setSeconds(countdownDate.getSeconds() + 30);

function updateCountdown() {
    const now = new Date();
    const difference = countdownDate - now;

    if (difference <= 0) {
        // If countdown has ended, stop the timer and display zeros
        clearInterval(interval);
        daysElement.textContent = '0 Days';
        hoursElement.textContent = '0 Hours';
        minutesElement.textContent = '0 Minutes';
        secondsElement.textContent = '0 Seconds';
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysElement.textContent = `${days} Days`;
    hoursElement.textContent = `${hours} Hours`;
    minutesElement.textContent = `${minutes} Minutes`;
    secondsElement.textContent = `${seconds} Seconds`;
}

// Update countdown every second
const interval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();