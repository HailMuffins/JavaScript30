function playSound(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops the function from running;
    audio.currentTime = 0; // rewinds to the start;
    audio.play();
    key.classList.add('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if it's not a transform;
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);