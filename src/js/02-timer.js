import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dataDays = document.querySelector('SPAN[data-days]');
const dataHours = document.querySelector('SPAN[data-hours]');
const dataMinutes = document.querySelector('SPAN[data-minutes]');
const dataSeconds = document.querySelector('SPAN[data-seconds]');
const startBtnRef = document.querySelector('button[data-start]');
// const stopBtnRef = document.querySelector('button[data-stop]');

let timerDate = {}
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        timerDate = selectedDates[0].getTime();
        if (timerDate < Date.now()) {
        startBtnRef.setAttribute('disabled', true)
        alert('Please choose a date in the future')
        return;
        }

        startBtnRef.removeAttribute('disabled')
    },
    
}
flatpickr("#datetime-picker", options);


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

const timer = {
    isActive: false,
    timerIntervalId: null,
    
    start() {
        
        startBtnRef.setAttribute('disabled', true)
        this.timerIntervalId = setInterval(() => {
            
            let startTime = Date.now();
            const time = timerDate - startTime;
            if (time <= 0) {
                clearInterval(this.timerIntervalId)
                return;
            }
            updateClock(convertMs(time))
        }, 1000);
    },
    
}

function updateClock({ days, hours, minutes, seconds }) {
    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero (value) {
    return String(value).padStart(2, '0')
}



startBtnRef.addEventListener('click', () => { timer.start() });
// stopBtnRef.addEventListener('click', () => { timer.stop() });