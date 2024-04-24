function updateCountdown(targetDate, elementId) {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        const hours = String(Math.floor(timeRemaining / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');

        const countdownString = `${hours}:${minutes}:${seconds}`;
        document.getElementById(elementId).textContent = countdownString;
    } else {
        document.getElementById(elementId).textContent = "00:00:00";
    }
}

// Set the target date to the end of the current day
const endOfDay = new Date();
endOfDay.setHours(23, 59, 59, 999);

const endOfWeek = new Date();
endOfWeek.setDate(endOfWeek.getDate() + (7 - endOfWeek.getDay())); // Set to next Sunday
endOfWeek.setHours(23, 59, 59, 999);

const endOfMonth = new Date();
endOfMonth.setMonth(endOfMonth.getMonth() + 1, 0); // Set to the last day of the current month
endOfMonth.setHours(23, 59, 59, 999);

updateCountdown(endOfDay, 'today');
updateCountdown(endOfWeek, 'week');
updateCountdown(endOfMonth, 'month');

// Update the countdown every second
setInterval(() => {
    updateCountdown(endOfDay, 'today');
}, 1000);

setInterval(() => {
    updateCountdown(endOfWeek, 'week');
}, 1000);

setInterval(() => {
    updateCountdown(endOfMonth, 'month');
}, 1000);