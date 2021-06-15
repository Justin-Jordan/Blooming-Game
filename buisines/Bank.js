let Bank = class {

    constructor(Party) {
        this.party = Party;
    }

    players = [];
    addPlayer(player) {
        this.players.push(player);
    }

    getAllPlayers() {
        return this.players;
    }

    decreasePlayerAccount(player, amount) {
        player.decreseAccount(amount);
    }

}