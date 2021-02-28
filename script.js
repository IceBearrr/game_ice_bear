const bear = document.querySelector('.bear');
const crab = document.querySelector('.crab');
const life = document.querySelector('body');

document.addEventListener('keydown', function(event) {
    jump();
});

function jump() {
    if (bear.classList != 'jump') {
        bear.classList.add('jump')
    }
    setTimeout( function() {
        bear.classList.remove('jump')
    }, 1500)
}

let isAlive = setInterval(function() {
    let bearTop = parseInt(window.getComputedStyle(bear).getPropertyValue('top'));
    let crabLeft = parseInt(window.getComputedStyle(crab).getPropertyValue('left'));

    if (crabLeft < 50 && crabLeft > 0 && bearTop <= 250 ) {
        life.innerHTML = "<img src='pic/gameover.jpg' style='margin-left:25%'>"

    }
}, 10)