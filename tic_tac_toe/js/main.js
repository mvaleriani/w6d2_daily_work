const View = require("./ttt-view.js");
const Game = require("../solution/game.js");

$( () => {
  const rootEl = $('.ttt');
  let ticTacToe = new Game();
  let view = new View(ticTacToe, rootEl);

});
