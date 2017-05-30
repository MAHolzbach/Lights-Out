/*jshint esversion: 6 */

const squares = document.getElementsByClassName('square');

const init = () => {
  for(let i = 0; i<squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
      let square1 = document.getElementById(e.target.id - 5);
      let square2 = document.getElementById(parseInt(e.target.id) + 5);
      let square3 = document.getElementById(e.target.id - 1);
      let square4 = document.getElementById(parseInt(e.target.id) + 1);
      e.target.classList.toggle('gray');
      if(square1 === null) {
        
      } else {
        square1.classList.toggle('gray');
      }
      square2.classList.toggle('gray');
      square3.classList.toggle('gray');
      square4.classList.toggle('gray');
      console.log(e.target.id);
      console.log('-------');
      console.log(square2);
    });
  }
};

init();
