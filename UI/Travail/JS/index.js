// Game Phases
//   Phase 1 - select dream/path
//		each dream will have an interest perk that can earn and save money at times in the game
//		
//   Phase 2 - race
//      starting out - 0 assets, pay off liabilities, buy low sell high
//      middle/the race - 1st big acquisition
//      end game - paid off liabilities and looking for a big deal
//   Phase 3 - acuire dream
//      fast track
//      cash flow day - start with 100 times passive income at end of rat race
//      new income = cashflow day income + 50k
//      rules = roll 2 die*, cannot borrow money from bank

var APP = APP || {
    players: [],
    pCount: 1,
    turnCount: 1,
    currentPlayer: 1,
    saveKey: '',
    currentPlayerArrPos: function() {
        return APP.currentPlayer - 1;
    },
    previousPlayer: function() {
        var prevPlayer;

        if (this.currentPlayer === 1) {
            prevPlayer = this.pCount;
        } else {
            prevPlayer = APP.currentPlayerArrPos();
        }

        return prevPlayer;
    },
    name: function(playerNumber) {
        var player = "player" + parseInt(playerNumber, 10) + "name";
        var name = document.getElementById(player).value;
        return name;
    },
    initGame: function() {
        $("#home-screen").click(function() {
            APP.display.hideHomeScreen();
            APP.display.showGameSelectionScreen();
            window.setTimeout(function() {
                if ($("#game-selection-screen").css('display') != 'none' && $("#turn-info").css('display') != 'inline-block') {
                    window.location.reload(false);
                }
            }, 120000);
        });
        $("#new-room-button").click(function() {
            APP.display.hideGameSelectionScreen();
            APP.display.showGameSetupScreen();
        });
        $("#start-game").click(function() {
            $("#window").css("background-image", "");
            $("#window").css("background-color", "white" /*"#4E342E"/*#010410*/ );
            APP.display.hideSetup();
            APP.display.renderBoard();
        });
        $("#continue-game").click(function() {
            $("#window").css("background-image", "");
            $("#window").css("background-color", "white" /*"#4E342E"/*#010410*/ );
            APP.display.hideSetup();
            APP.display.showFinanceBox();
            APP.display.renderBoard();
        });

        //APP.saveKey = Math.random().toString(36).substring(7);

    },

    