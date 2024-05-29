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

// -------------------------------
// LIVE COUNTDOWN
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
// AGE DECIMAL

const dateInput = document.getElementById('start');
const dateButton = document.getElementById('date-button')

// ---
// Age calculator

function calculateAge(birthdate) {
    // Parse the birthdate string into a Date object
    var birthDate = new Date(birthdate);
    
    // Get the current date
    var currentDate = new Date();
    
    // Calculate the difference in milliseconds between the current date and the birthdate
    var difference = currentDate - birthDate;
    
    // Convert the difference from milliseconds to years
    var age = difference / (1000 * 60 * 60 * 24 * 365.25);
    
    // Round the age to 5 decimal places
    age = Math.round(age * 1000000000000) / 1000000000000;
    
    return age;
}

function updateAgeContinuously(birthdate) {

    // Update the age every 100 milliseconds (10 times per second)
    setInterval(function() {
        var age = calculateAge(birthdate);
        
        document.getElementById('age-calendar').innerHTML = ''
        document.getElementById("age-calendar").classList.add('animate__animated', 'animate__fadeIn');
        document.getElementById("age-calendar").textContent = "You are "+ age + " years old.";

    }, 40);

    var resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Age';
    resetButton.classList.add('age-reset');

    // Reset button clears the stored birthdate, and automatically refreshes the page.
    resetButton.addEventListener('click', function() {
        console.log("button is clicked")
        localStorage.removeItem('birthdate');
        dateInput.value = '';
        location.reload();
    })

    document.getElementById("reset-button").appendChild(resetButton)
}

// Add an event listener for when the input value changes
// INITIAL BIRTHDAY SET
// Add an event listener for when the input value changes
// INITIAL BIRTHDAY SET
dateButton.addEventListener('click', function() {
    // Get the selected date
    const selectedDate = dateInput.value;

    // document.getElementById('age-calendar').innerHTML = ''

    console.log('Selected date:', selectedDate);

    if (selectedDate === "") {
        alert("Please enter a valid date.");
        return;
    }

    var parsedDate = new Date(selectedDate);

    // Get the current date
    var currentDate = new Date();

    // Check if the entered date is not in the future
    if (parsedDate > currentDate) {
        alert("Please enter a date that is not in the future.");
        return;
    }

    localStorage.setItem('birthdate', selectedDate);

    updateAgeContinuously(selectedDate)

    
});

window.onload = function() {
    var savedBirthdate = localStorage.getItem('birthdate');
    if (savedBirthdate) {
        // If a birthdate is saved, update the age continuously
        updateAgeContinuously(savedBirthdate);
        // Set the input value to the saved birthdate
        dateInput.value = savedBirthdate;
    }
};

// RANDOM QUOTES!
// RANDOM QUOTES!
// RANDOM QUOTES!
quotesArray = [
    {
        "name": "James",
        "quote": "Pave your own way no matter what."
    },
    {
        "name": "Jinwoo",
        "quote": "You have to do what feels right for you."
    }
]

function getRandomQuote(quotesArray) {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
}

console.log(getRandomQuote(quotesArray))