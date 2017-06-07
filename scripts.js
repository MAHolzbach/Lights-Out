/*jshint esversion: 6 */

const squares = document.getElementsByClassName('square');
const newButton = document.getElementById('newButton');
const moves = document.getElementById('moves');
let moveIndex = 1;

//IIFE for core functionality.
(global => {
  for(let i = 0; i<squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
      let square1 = document.getElementById(e.target.id - 5);
      let square2 = document.getElementById(parseInt(e.target.id) + 5);
      let square3 = document.getElementById(e.target.id - 1);
      let square4 = document.getElementById(parseInt(e.target.id) + 1);

      e.target.classList.toggle('gray');

      if(e.target.classList.contains('plusException') && square4.classList.contains('gray')) {
        console.log(null);
      } else if (e.target.classList.contains('plusException')) {
        square4.classList.remove('gray');
      } else if (square4 === null) {
        console.log(null);
      } else {
        square4.classList.toggle('gray');
      }

      if(e.target.classList.contains('minusException') && square3.classList.contains('gray')) {
        console.log(null);
      } else if(e.target.classList.contains('minusException')) {
        square3.classList.remove('gray');
      } else if (square3 === null) {
        console.log(null);
      } else {
        square3.classList.toggle('gray');
      }

      if(square1 === null) {
        console.log(null);
      } else {
        square1.classList.toggle('gray');
      }

      if(square2 === null) {
        console.log(null);
      } else {
        square2.classList.toggle('gray');
      }

      moves.textContent = moveIndex;
      moveIndex++;
    });
  }
})(window);
//

//New game button logic.
const newGame = () => {
  for(let i = 0; i<squares.length; i++) {
    let color = Math.floor(Math.random() * 2);
    if(color === 0) {
      squares[i].classList.add('gray');
    } else {
      squares[i].classList.remove('gray');
    }
  }
  moves.textContent = 0;
  moveIndex = 1;
};

newGame();

newButton.addEventListener('click', newGame);
//
