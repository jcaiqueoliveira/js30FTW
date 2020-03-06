function startPlaying(){
  window.addEventListener('keydown', action)  
}

function action(event){
    const audio =  selectAudio(event.keyCode)
    const key = selectKey(event.keyCode)
  
    if(audio != undefined && key != undefined){
      play(audio)
      addAnimation(key)
    }
}

function selectAudio(keyCode){
    return document.querySelector(`audio[data-key="${keyCode}"]`)
}

function selectKey(keyCode){
    return document.querySelector(`.key[data-key="${keyCode}"]`)
}

function play(audio){
    audio.currentTime = 0;
    audio.play()
}

function addAnimation(key){
    key.classList.add('playing')
}

function finishPlaying(){
    const keys = document.querySelectorAll('.key')
    keys.forEach( key => key.addEventListener('transitionend', removeAnimation))
}

function removeAnimation(e){
    if(e.propertyName === 'transform'){
        this.classList.remove('playing')
    }
}