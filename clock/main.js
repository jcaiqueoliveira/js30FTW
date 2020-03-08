
const DEFAULT_DEGREES = 90

const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function startTick(){
    setInterval(updateHands, 1000)
}

function updateHands(){
  
    const date = new Date()
    const secondDegrees = calculateHandDegrees(date.getSeconds())
    const minDegrees = calculateHandDegrees(date.getMinutes())
    
    const hourDegrees = calculateHourDegrees(date.getHours())

    rotate(secondHand, secondDegrees)
    rotate(minHand, minDegrees)
    rotate(hourHand, hourDegrees)
}


function calculateHandDegrees(time){
   
    return ((time / 60) * 360) + DEFAULT_DEGREES
}

function calculateHourDegrees(time){
    return ((time / 12) * 360) + DEFAULT_DEGREES
}

function rotate(hand, degrees){
    hand.style.transform = `rotate(${degrees}deg)`
}