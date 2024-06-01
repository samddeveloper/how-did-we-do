const thankYouDiv = document.getElementById ('thankYouId');
const howDidWeDoId = document.getElementById ('howDidWeDoId');
const scoreId = document.getElementById ('score');

thankYouDiv.style.display = 'none'
const ratingCircleOne = document.getElementById ('one');
const ratingCircleTwo = document.getElementById ('two');
const ratingCircleThree = document.getElementById ('three');
const ratingCircleFour = document.getElementById ('four');
const ratingCircleFive = document.getElementById ('five');
const submitButton = document.getElementById ('submit');

let rating = 0;

function removeActiveClass () {
    ratingCircleOne.classList.remove('active');
    ratingCircleTwo.classList.remove('active');
    ratingCircleThree.classList.remove('active');
    ratingCircleFour.classList.remove('active');
    ratingCircleFive.classList.remove('active');
}

ratingCircleOne.addEventListener('click',function (){
    rating = 1;
    removeActiveClass();
    ratingCircleOne.classList.add('active');
})
ratingCircleTwo.addEventListener('click',function (){
    rating = 2;
    removeActiveClass();
    ratingCircleTwo.classList.add('active');
})
ratingCircleThree.addEventListener('click',function (){
    rating = 3;
    removeActiveClass();
    ratingCircleThree.classList.add('active');
})
ratingCircleFour.addEventListener('click',function (){
    rating = 4;
    removeActiveClass();
    ratingCircleFour.classList.add('active');
})
ratingCircleFive.addEventListener('click',function (){
    rating = 5;
    removeActiveClass();
    ratingCircleFive.classList.add('active');
})

submitButton.addEventListener('click',function(){
    if (rating > 0) {
        howDidWeDoId.style.display = 'none';
        scoreId.textContent = rating;
        thankYouDiv.style.display = 'flex';
    } else {
        return null;
    }
})