const firstBtn = document.querySelector('.first__btn');
const twoBtn = document.querySelector('.two__btn');
const threeBtn = document.querySelector('.three__btn');

const firstBlock = document.querySelector('.first');
const twoBlock = document.querySelector('.two');
const threeBlock = document.querySelector('.three');




firstBtn.addEventListener('click', function (){
    firstBlock.classList.toggle('changedBlock' );
})


twoBtn.addEventListener('click', function(){
    twoBlock.classList.toggle('changedBlock');
})

threeBtn.addEventListener('click', function(){
    threeBlock.classList.toggle('changedBlock');
})