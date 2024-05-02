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

// Set the target date to the end of tomorrow
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(23, 59, 59, 999);

const tomorrowFormatted = ` [${tomorrow.getMonth() + 1}/${tomorrow.getDate()}/${tomorrow.getFullYear()}]`;
document.getElementById("today-date").textContent = tomorrowFormatted;


// Set the target date to the end of the current day
const endOfDay = new Date();
endOfDay.setHours(23, 59, 59, 999);

const endOfWeek = new Date();
endOfWeek.setDate(endOfWeek.getDate() + (7 - endOfWeek.getDay())); // Set to next Sunday
endOfWeek.setHours(23, 59, 59, 999);
const endOfWeekFormatted = ` [${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}/${endOfWeek.getFullYear()}]`
document.getElementById("week-date").textContent = endOfWeekFormatted;

const endOfMonth = new Date();
endOfMonth.setMonth(endOfMonth.getMonth() + 1, 0); // Set to the last day of the current month
endOfMonth.setHours(23, 59, 59, 999);

// Set the target date to the end of the next month
const nextMonth = new Date();
nextMonth.setMonth(nextMonth.getMonth() + 1);
nextMonth.setDate(1); // Set to the first day of next month
nextMonth.setHours(23, 59, 59, 999);

const nextMonthFormatted = ` [${nextMonth.getMonth() + 1}/${nextMonth.getDate()}/${nextMonth.getFullYear()}]`;
document.getElementById("month-date").textContent = nextMonthFormatted;

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

// ------------------------------------------------
// AGE TIMER

const dateInput = document.getElementById('start');
const dateButton = document.getElementById('date-button')

// Add an event listener for when the input value changes
dateButton.addEventListener('click', function() {
    // Get the selected date
    const selectedDate = dateInput.value;
    // Log the selected date to the console
    console.log('Selected date:', selectedDate);
    document.getElementById("your-age").textContent = selectedDate
    document.getElementById("your-age").classList.add('animate__animated', 'animate__fadeIn');
    
});

