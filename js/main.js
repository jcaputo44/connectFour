// ----constants----//

const chips = {
  '1': 'rgb(2, 90, 255)',
  '-1': 'rgb(2, 155, 2)',
  'null': 'rgb(235, 139, 87)',
};

//put in reverse order
const columns = [
  [35,28,21,14,7,0],
  [36,29,22,15,8,1],
  [37,30,23,16,9,2],
  [38,31,24,17,10,3],
  [39,32,25,18,11,4],
  [40,33,26,19,12,5],
  [41,34,27,20,13,6]
]

const winningCombos = [
  [0,1,2,3],
  [1,2,3,4],
  [2,3,4,5],
  [3,4,5,6],

  [7,8,9,10],
  [8,9,10,11],
  [9,10,11,12],
  [10,11,12,13],

  [14,15,16,17],
  [15,16,17,18],
  [16,17,18,19],
  [17,18,19,20],

  [21,22,23,24],
  [22,23,24,25],
  [23,24,25,26],
  [24,25,26,27],

  [28,29,30,31],
  [29,30,31,32],
  [30,31,32,33],
  [31,32,33,34],

  [35,36,37,38],
  [36,37,38,39],
  [37,38,39,40],
  [38,39,40,41],

  [0,7,14,21],
  [7,14,21,28],
  [14,21,28,35],

  [1,8,15,22],
  [8,15,22,29],
  [15,22,29,36],

  [2,9,16,23],
  [9,16,23,30],
  [16,23,30,37],

  [3,10,17,24],
  [10,17,24,31],
  [17,24,31,38],

  [4,11,18,25],
  [11,18,25,32],
  [18,25,32,39],
  
  [5,12,19,26],
  [12,19,26,33],
  [19,26,33,40],

  [6,13,20,27],
  [13,20,27,34],
  [20,27,34,41],

  [14,22,30,38],
  [7,15,23,31],
  [15,23,31,39],

  [0,8,16,24],
  [8,16,24,32],
  [16,24,32,40],

  [1,9,17,25],
  [9,17,25,33],
  [17,25,33,41],

  [2,10,18,26],
  [10,18,26,34],
  [3,11,19,27],

  [20,26,32,38],
  [13,19,25,31],
  [19,25,31,37],

  [6,12,18,24],
  [12,18,24,30],
  [18,24,30,36],

  [5,11,17,23],
  [11,17,23,29],
  [17,23,29,35],

  [4,10,16,22],
  [10,16,22,28],
  [3,9,15,21],
];


// ----state (variables)----//

let board; //array of 42 Els
let turn; //who's turn? 1 or -1
let winner; // track game status, null, 1 or -1, t for tie
let targetedColumn = [];

//-----cache element references----//

let circEls = Array.from(document.querySelectorAll('section.board > div'));

let p1Token = document.getElementById('chip1')
let p2Token = document.getElementById('chip2')

// let column1 = Array.from(document.querySelectorAll('section.board > div.column1'));
// let column2 = Array.from(document.querySelectorAll('section.board > div.column2'));
// let column3 = Array.from(document.querySelectorAll('section.board > div.column3'));
// let column4 = Array.from(document.querySelectorAll('section.board > div.column4'));
// let column5 = Array.from(document.querySelectorAll('section.board > div.column5'));
// let column6 = Array.from(document.querySelectorAll('section.board > div.column6'));
// let column7 = Array.from(document.querySelectorAll('section.board > div.column7'));

// const message = document.querySelector('footer');

//----event listeners-----//

document.querySelector('section.board')
    .addEventListener('click', function(evt) {
      const idx = circEls.indexOf(evt.target);
      if (idx === -1 || board[idx] || 
      (winner !== null && winner !== undefined)) return;
      // console.log(idx);
      // console.log(evt.target);
      for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < columns[i].length; j++) {
          if (idx === columns[i][j]) 
          targetedColumn = columns[i];
        }
      }
      const columns = [
        [35,28,21,14,7,0],
        [36,29,22,15,8,1],
        [37,30,23,16,9,2],
        [38,31,24,17,10,3],
        [39,32,25,18,11,4],
        [40,33,26,19,12,5],
        [41,34,27,20,13,6]
      ]

      // getColumn();
      // renderBoard();
      // board[idx] = turn;
      render();
      turn = turn * -1;
      winner = getWinner();
    });


//-----functions------//

init();

function init() {
    board = new Array (42).fill(null);
    turn = 1;
    winner = null; 
    render();
}

function render() {
    renderBoard(); 
    // renderTurn();
  };
 

// function getColumn() {
//   for (let i = 0; i < columns.length; i++) {
//     for (let j = 0; j < columns[i].length; j++) {
//       if (idx === columns[i][j]) 
//       targetedColumn = columns[i];
//     }
//   }
// }

// function handleMove() {

// }
  
  function renderBoard() {
    console.log(targetedColumn);
    // board.forEach(function(circ, idx) {
      // circEls[idx].style.backgroundColor = chips[circ]; 
      // targetedColumn.forEach(function(targ, idx){
      for (let i = 0; i < targetedColumn.length; i++) {
        // if (board[targetedColumn[i]] !== null) console.log('hello')
        if (board[targetedColumn[i]] === null) {
          board[targetedColumn[i]] = turn;
          circEls[targetedColumn[i]].style.backgroundColor = chips[turn]; 
            break;
          // console.log(circEls[targ]);
          //  console.log(board[targ]);

        }
      else console.log('hello');
      } 

    // });
    if (turn === 1) {
      p2Token.style.backgroundColor = 'beige';
      p1Token.style.backgroundColor = 'rgb(2, 90, 255)';
    } else if (turn === -1) {
      p1Token.style.backgroundColor = 'beige';
      p2Token.style.backgroundColor = 'rgb(2, 155, 2)';
    }
  };
  
  function getWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
      if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + 
        board[winningCombos[i][2]] + board[winningCombos[i][3]]) === 4)
        return board[winningCombos[i][0]];
      }
  };
 