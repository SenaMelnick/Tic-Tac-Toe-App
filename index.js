$("#turn-o").hide();
//hides the text for player O's turn for later use

var oneOne = $("#1-1");
var oneTwo = $("#1-2");
var oneThree = $("#1-3");
var twoOne = $("#2-1");
var twoTwo = $("#2-2");
var twoThree = $("#2-3");
var threeOne = $("#3-1");
var threeTwo = $("#3-2");
var threeThree = $("#3-3");
//sets the squares of the grid to variables

var oneOneState = "e";
var oneTwoState = "e";
var oneThreeState = "e";
var twoOneState = "e";
var twoTwoState = "e";
var twoThreeState = "e";
var threeOneState = "e";
var threeTwoState = "e";
var threeThreeState = "e";
//variables to save the current state of each square, set to e for empty as default

var turn = "x";

var body = $("body");

var gameWon = false;

const play = (crood) => {
  switch (crood) {
    case "1-1":
      add(oneOne, oneOneState);
      oneOneState = turn;
      //sets the squares state to whatever turn it currently is
      if (turn === "x") {
        if (oneTwoState === "x" && oneThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoOneState === "x" && threeOneState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "x" && threeThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "o";
        turnSwitchO();
      } else {
        if (oneTwoState === "o" && oneThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoOneState === "o" && threeOneState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "o" && threeThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "x";
        turnSwitchX();
      }
      break;
    case "1-2":
      add(oneTwo, oneTwoState);
      oneTwoState = turn;
      if (turn === "x") {
        if (oneOneState === "x" && oneThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "x" && threeTwoState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "o";
        turnSwitchO();
      } else {
        if (oneOneState === "o" && oneThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "o" && threeTwoState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "x";
        turnSwitchX();
      }
      break;
    case "1-3":
      add(oneThree, oneThreeState);
      oneThreeState = turn;
      if (turn === "x") {
        if (oneOneState === "x" && oneTwoState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoThreeState === "x" && threeThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "x" && threeOneState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "o";
        turnSwitchO();
      } else {
        if (oneOneState === "o" && oneTwoState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoThreeState === "o" && threeThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "o" && threeOneState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "x";
        turnSwitchX();
      }
      break;
    case "2-1":
      add(twoOne, twoOneState);
      twoOneState = turn;
      if (turn === "x") {
        if (oneOneState === "x" && threeOneState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "x" && twoThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "o";
        turnSwitchO();
      } else {
        if (oneOneState === "o" && threeOneState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "o" && twoThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "x";
        turnSwitchX();
      }
      break;
    case "2-2":
      add(twoTwo, twoTwoState);
      twoTwoState = turn;
      if (turn === "x") {
        if (oneTwoState === "x" && threeTwoState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoOneState === "x" && twoThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (oneOneState === "x" && threeThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (threeOneState === "x" && oneThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "o";
        turnSwitchO();
      } else {
        if (oneTwoState === "o" && oneThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoOneState === "o" && threeOneState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "o" && threeThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (threeOneState === "o" && oneThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "x";
        turnSwitchX();
      }
      break;
    case "2-3":
      add(twoThree, twoThreeState);
      twoThreeState = turn;
      if (turn === "x") {
        if (oneThreeState === "x" && threeThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoOneState === "x" && twoTwoState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "o";
        turnSwitchO();
      } else {
        if (oneThreeState === "o" && threeThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoOneState === "o" && twoTwoState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "x";
        turnSwitchX();
      }
      break;
    case "3-1":
      add(threeOne, threeOneState);
      threeOneState = turn;
      if (turn === "x") {
        if (oneOneState === "x" && twoOneState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (threeTwoState === "x" && threeThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "x" && oneThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "o";
        turnSwitchO();
      } else {
        if (oneOneState === "o" && twoOneState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (threeTwoState === "o" && threeThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (twoTwoState === "o" && oneThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "x";
        turnSwitchX();
      }
      break;
    case "3-2":
      add(threeTwo, threeTwoState);
      threeTwoState = turn;
      if (turn === "x") {
        if (threeOneState === "x" && threeThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (oneTwoState === "x" && twoTwoState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "o";
        turnSwitchO();
      } else {
        if (threeOneState === "o" && threeThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (oneTwoState === "o" && twoTwoState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "x";
        turnSwitchX();
      }
      break;
    case "3-3":
      add(threeThree, threeThreeState);
      threeThreeState = turn;
      if (turn === "x") {
        if (oneThreeState === "x" && twoThreeState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (threeOneState === "x" && threeTwoState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (oneOneState === "x" && twoTwoState === "x") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player X has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "o";
        turnSwitchO();
      } else {
        if (oneThreeState === "o" && twoThreeState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (threeOneState === "o" && threeTwoState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        } else if (oneOneState === "o" && twoTwoState === "o") {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">Player O has won! Congratulations!</div>'
          );
          gameWon = true;
        }
        turn = "x";
        turnSwitchX();
      }
      break;
    default:
      console.error("Error");
      break;
  }

  if (gameWon === false) {
    if (oneOneState !== "e" && oneTwoState !== "e" && oneThreeState !== "e") {
      if (twoOneState !== "e" && twoTwoState !== "e" && twoThreeState !== "e") {
        if (
          threeOneState !== "e" &&
          threeTwoState !== "e" &&
          threeThreeState !== "e"
        ) {
          body.prepend(
            '<div class="alert alert-primary center" role="alert">The game is a draw!</div>'
          );
        };
      };
    };
  };
};
//this fucntion does a number a things
//first it checks what square was clicked
//it then invokes the add function below which adds either an x or o to the square
//it then updates the state of the sqaure in JS
//then it checks all possible win conditions and declares a winner if there is one
//it then updates the turn
//and finally it checks to see if the bored state is a draw

const add = (crood, state) => {
  if (state === "e") {
    if (turn === "x") {
      crood.append('<img class="image-center img-fluid" src="X.png"></img>');
    } else {
      crood.append('<img class="image-center img-fluid" src="O.png"></img>');
    }
  }
};

const turnSwitchO = () => {
  $("#turn-x").hide();
  $("#turn-o").show();
};

const turnSwitchX = () => {
  $("#turn-o").hide();
  $("#turn-x").show();
};
//functions for switching the turn text at the top of the screen

oneOne.on("click", () => {
  play("1-1");
});
oneTwo.on("click", () => {
  play("1-2");
});
oneThree.on("click", () => {
  play("1-3");
});
twoOne.on("click", () => {
  play("2-1");
});
twoTwo.on("click", () => {
  play("2-2");
});
twoThree.on("click", () => {
  play("2-3");
});
threeOne.on("click", () => {
  play("3-1");
});
threeTwo.on("click", () => {
  play("3-2");
});
threeThree.on("click", () => {
  play("3-3");
});
//event listneers for every square