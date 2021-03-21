const bear = document.querySelector('.bear');
const crab = document.querySelector('.crab');
const life = document.querySelector('body');

document.addEventListener('keydown', function(event) {
    jump();
});

document.addEventListener('touchstart', function(event) {
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
        document.body.style.backgroundImage = "url('pic/gameover.jpg')";
        life.innerHTML = "<div class=\"form-row text-center\">     <div class=\"col-md-12\">\n<button class='btn btn-outline-secondary resetbtn text-center' aria-label='Начать заново' type='button' name='resetbtn' style='margin-top: 23%'>Начать заново</button> </div> </div>"

        const btn = document.querySelector('.resetbtn');
        document.addEventListener('click', function(event) {
            location.reload();
        });
    }
}, 10)

//
//
//
//
// function sum(itog) {
//     let n = 1;
// console.log(itog + n);
// }
//
// sum(20);
//
// function res(n, r) {
//     return n + r;
// }
// console.log(res('hj', 'jjh'));
//
// let n = 50;
// let r = 7;
// res(n, r);
//
//
// let nr = 50;
// let rr = 7;
// res(nr, rr);
//
// res(110,50);
//
//
// class Sum {
//     constructor(name1, name2) {
//         this.name1 = name1;
//         this.name2 = name2;
//     }
//
//     sum() {
//         this.element = this.name1 + this.name2;
//         return this.element;
//     }
//     minus() {
//         this.element = this.name1 - this.name2;
//         return this.element;
//     }
//     um() {
//         this.element = this.name1 * this.name2;
//         return this.element;
//     }
//     del() {
//         this.element = this.name1 / this.name2;
//         return this.element;
//     }
// }
//
// const itogo = new Sum (5, 5);
// let tkjdvb = itogo.sum();
// console.log(tkjdvb)
// const itogo2 = new Sum (10, 5);
//  tkjdvb = itogo.minus();
// console.log(tkjdvb)
// const itogo3 = new Sum (5, 5);
//  tkjdvb = itogo.um();
// console.log(tkjdvb)
// const itogo4 = new Sum (5, 5);
//  tkjdvb = itogo.del();
// console.log(tkjdvb)
