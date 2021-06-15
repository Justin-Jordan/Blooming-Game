let Party = class {
    constructor() {

    }

    rollDice(){
        return Math.floor(Math.random() * (6 -1)) + 1;
    }

    players = [];
    addPlayer(player) {
        this.players.push(player);
    }

    getAllPlayers() {
        return this.players;
    }
}