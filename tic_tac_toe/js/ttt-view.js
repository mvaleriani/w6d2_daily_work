class View {
  constructor(game, $el) {
    this.game = game;
    console.log('test view');
    console.log('test view');

    this.setupBoard();

    this.bindEvents();
  }

  bindEvents() {
    // click
    let nodes = $('.node');
    let bGame = this.game;
    // console.log($('.node').length);
    // console.log(nodes[2]);
    for (var i = 0; i < nodes.length; i++) {
      $(nodes[i]).on("click", (node) => {
        let pos = $(node.target).attr('id').split('_');
        console.log(pos);
        if (bGame.board.isEmptyPos(pos)) {
          this.makeMove($(node.target), pos);
        }
      });
    }
  }

  makeMove($square, pos) {
    console.log($square);
    if (this.game.currentPlayer === this.game.board.marks[0]) {
      $square.append($(`<img src="./images/bust.gif" alt="">`));
    } else {
      $square.append(`<img src="./images/windows.png" alt="">`);
    }
    this.game.playMove(pos);


    // game

  }

  setupBoard() {
    debugger;
    console.log(this);
    let spaces = [];
    let board = this.game.board.grid;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let pos = i + "_" + j;
        $('.grid').append($(`<li class="node" id="${pos}"></li>`));
      }
    }

  }
}

module.exports = View;
