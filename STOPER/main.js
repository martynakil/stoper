const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');


const infoBtn = document.querySelector('.fas fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');


const changeColorBtn = document.querySelector('.fa-paint-brush');

const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');
const colorPanel = document.querySelector('.colors');


let root = document.documentElement;




let countTime;
let minutes = 0;
let seconds = 0;

let timeArr = [];



const handleStart = () => {
    clearInterval(countTime);


    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`
        } else {
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`
        }
    }, 300);
}


const handlePause = () => {
    clearInterval(countTime);
    
}

const handleStop = () => {
    time.innerHTML = `last time: ${stopwatch.textContent}`

    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timeArr.push(stopwatch.textContent)

    }
    clearStuff()
}

const handleReset = () => {
    time.style.visibility = 'hidden';

    timeArr = [];
    clearStuff()
}

const clearStuff = () => {

    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
}


const showHistory = () => {

    timeList.textContent = '';
    let num = 1;

    timeArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Measurement No. ${num}: <span>${time}</span>`
        timeList.appendChild(newTime)
        num++;
    })
}


const showModal = () => {
    if (!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    }
    modalShadow.classList.toggle('modal-animation')
}


changeColorBtn.addEventListener('click', () => {

    colorPanel.classList.toggle('show-colors');

})

colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'greenyellow');
})

colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'indianred');
})

colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'orange');
})

colorFour.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'paleturquoise');
})



startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);

infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false)

