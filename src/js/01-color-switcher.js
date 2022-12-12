
const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    btnReset: document.querySelector('button[data-reset]'),
    documentBody: document.querySelector('body'),
}

const { btnStart, btnStop, btnReset, documentBody } = refs;
let startBtnIntervalId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnStartClick() {
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
    startBtnIntervalId = setInterval(() => {
        const color = getRandomHexColor()
        document.body.style.backgroundColor = color
    }, 1000);
}

function onBtnStopClick() {
    clearInterval(startBtnIntervalId)
    btnStart.removeAttribute('disabled')
    btnStop.setAttribute('disabled', true);
}

function onResetClick () {
    documentBody.style.backgroundColor = '#ffffff'
} 
btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);
btnReset.addEventListener('click', onResetClick);