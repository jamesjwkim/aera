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
        "name": "anonymous",
        "quote": "Pave your own way no matter what."
    },
    
    {
        "name": "anonymous",
        "quote": "You have to do what feels right for you."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "The past has no power over the present moment."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Life isn't as serious as the mind makes it out to be."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "I have lived with several Zen masters -- all of them cats."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Life is the dancer and you are the dance."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Whatever you fight, you strengthen, and what you resist, persists."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Worry pretends to be necessary but serves no useful purpose."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "It is not uncommon for people to spend their whole life waiting to start living."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Accept - then act. Whatever the present moment contains, accept it as if you had chosen it."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Being spiritual has nothing to do with what you believe and everything to do with your state of consciousness."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "This, too, will pass."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "All problems are illusions of the mind."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Awareness is the greatest agent for change."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Don't Seek Happiness. If you seek it, you won't find it, because seeking is the antithesis of happiness"
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Being must be felt. It can't be thought."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Only the truth of who you are, if realized, will set you free."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Nothing has happened in the past; it happened in the Now. Nothing will ever happen in the future; it will happen in the Now."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "If not now, when?"
    },
    {
        "name": "Eckhart Tolle",
        "quote": "What a caterpillar calls the end of the world we call a butterfly."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "You are not IN the universe, you ARE the universe, an intrinsic part of it."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "In today's rush we all think too much, seek too much, want too much and forget about the joy of just Being."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Where there is anger there is always pain underneath."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "The beginning of freedom is the realization that you are not “the thinker.”"
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Humanity is now faced with a stark choice: Evolve or die."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "What you react to in others, you strengthen in yourself."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Words reduce reality to something the human mind can grasp, which isn’t very much."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Man made God in his own image..."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Once you have identified with some form of negativity, you do not want to let it go..."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Your outer journey may contain a million steps; your inner journey only has one: the step you are taking right now."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Reading is my passion and my escape since I was 5 years old."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Love is a state of Being."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Accept — then act. Whatever the present moment contains, accept it as if you had chosen it."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "The significance is hiding in the insignificant. Appreciate everything."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Die to the past every moment. You don't need it."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Authentic human interactions become impossible when you lose yourself in a role."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Become conscious of being conscious."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Defining yourself through thought is limiting yourself."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "It is when we are trapped in incessant streams of compulsive thinking..."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "You have so much to learn from your enemies."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Focus attention on the feeling inside you."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "You become most powerful in whatever you do if the action is performed for its own sake..."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "Rather than being your thoughts and emotions, be the awareness behind them."
    },
    {
        "name": "Eckhart Tolle",
        "quote": "The primary cause of unhappiness is never the situation, but you thoughts about it."
    }
]

function getRandomQuote(quotesArray) {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
}

function displayRandomQuote() {
    const quoteDiv = document.querySelector('.quote-html');
    const randomQuote = getRandomQuote(quotesArray);
    const quoteHTML = `
        <div class="quote-text animate__animated animate__fadeIn animate__delay-2s">"${randomQuote.quote}"</div>
        <div class="quote-author animate__animated animate__fadeIn animate__delay-3s">- ${randomQuote.name}</div>
    `;
    quoteDiv.innerHTML = quoteHTML;
}

// Display a random quote when the page loads
displayRandomQuote();