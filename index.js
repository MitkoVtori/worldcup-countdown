
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const kickOffWorldCupDate = new Date('2022-12-18 17:00:00 UTC+2') // (the year when it starts-the month-the day  the hour-the minute-the second)
// if the world cup starts, you just change the date.

function zeroLeft (number) {
    return String(number).padStart(2, '0')
}

function diffKickOffDateWorldCup () {
    const currentDate = new Date().getTime()
    return kickOffWorldCupDate.getTime() - currentDate
}

function setCountDown (element, value) {
    document.querySelector(`.${element}`).innerHTML = value
}

function diffDay (diff) {
    return Math.floor(diff / day)
}

function diffHour (diff) {
    const round = Math.floor(diff % day / hour)
    return zeroLeft(round)
}

function diffMinute (diff) {
    const round = Math.floor(diff % hour / minute)
    return zeroLeft(round)
}

function diffSecond (diff) {
    const round = Math.floor(diff % minute / second)
    return zeroLeft(round)
}

function countDown () {
    const diff = diffKickOffDateWorldCup()

    setCountDown('days', diffDay(diff))
    setCountDown('hours', diffHour(diff))
    setCountDown('minutes', diffMinute(diff))
    setCountDown('seconds', diffSecond(diff))
}

window.load = setInterval(countDown, 1000)
