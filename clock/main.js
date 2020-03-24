
const DEFAULT_DEGREES = 90

const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function startTick(){
    setInterval(updateHands, 1000)
}

function updateHands(){
  
    const date = new Date()
    const secondDegrees = calculateHandDegrees(date.getSeconds(), "second")
    const minDegrees = calculateHandDegrees(date.getMinutes(), "minute")
    const hourDegrees = calculateHandDegrees(date.getHours(), "hour")

    rotate(secondHand, secondDegrees)
    rotate(minHand, minDegrees)
    rotate(hourHand, hourDegrees)
}


const divisionByType = {
    hour : 12,
    minute : 60,
    second : 60
}

function calculateHandDegrees(time, type){
    const division = divisionByType[type]
    return ((time / division) * 360) + DEFAULT_DEGREES
}

function rotate(hand, degrees){
    hand.style.transform = `rotate(${degrees}deg)`
}


