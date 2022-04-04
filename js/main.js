// ----constants----//

const chips = {
  '1': 'rgb(2, 90, 255)',
  '-1': 'rgb(2, 155, 2)',
  'null': 'rgb(235, 139, 87)'
};

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

let board; //array of 36 Els
let turn; //who's turn? 1 or -1
let winner; // track game status, null, 1 or -1, t for tie


//-----cache element references----//

let circEls = Array.from(document.querySelectorAll('section.board > div'));

const message = document.querySelector('footer');

//----event listeners-----//

document.querySelector('section.board')
    .addEventListener('click', function(evt) {
      const idx = circEls.indexOf(evt.target);
      if (idx === -1 || board[idx]) return;
      console.log(idx);
      board[idx] = turn;
      turn = turn * -1;
      winner = getWinner();
      render();
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
  function renderTurn() {
    
  }
  
  function renderBoard() {
    board.forEach(function(circ, idx) {
        circEls[idx].style.backgroundColor = chips[circ];
    });
  };
  
  function getWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
      if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + 
        board[winningCombos[i][2]] + board[winningCombos[i][3]]) === 4)
        return board[winningCombos[i][0]];
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      //     let slot1 = board[winningCombos[i][0]];
      //     let slot2 = board[winningCombos[i][1]];
      //     let slot3 = board[winningCombos[i][2]];
      //     let slot4 = board[winningCombos[i][3]];
      
      //   if (slot1.contains('1') && slot2.contains('1') &&
      //       slot3.contains('1') && slot4.contains('1') 
      //   )
      //   console.log(winner);
      //  return winner = '1';
      // }
    
    // {
  };
 