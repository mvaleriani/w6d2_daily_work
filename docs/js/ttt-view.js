class View {
  constructor(game, $el) {
    this.game = game;

    this.setupBoard();

    this.bindEvents();
    this.aud = $("audio");
    this.aud[0].play();
    this.aud[0].volume = .5;
    $('h1').addClass('animated fadeIn');
  }

  bindEvents() {
    // click
    let nodes = $('.node');
    let bGame = this.game;

    for (var i = 0; i < nodes.length; i++) {
      $(nodes[i]).on("click", (node) => {
        let pos = $(node.target).attr('id').split('_');

        if (bGame.board.isEmptyPos(pos)) {
          this.makeMove($(node.target), pos);
        }
      });
    }
  }

  makeMove($square, pos) {
    $('#palm1').removeClass('animated jello');
    $('#palm2').removeClass('animated jello');
    this.aud[1].currentTime = 0;
    if (this.game.currentPlayer === this.game.board.marks[0]) {
      $square.append($(`<img src="./images/bust.gif" alt="">`));
    } else {
      $square.append(`<img src="./images/windows.png" alt="">`);
    }
    this.game.playMove(pos);

    this.aud[1].play();

    $('#palm1').addClass('animated jello');
    $('#palm2').addClass('animated jello');

  }

  setupBoard() {
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
