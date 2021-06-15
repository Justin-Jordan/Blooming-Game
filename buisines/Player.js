let Player = class {
account;
    constructor(playerName, color, party, profession) {
        this.playerName = playerName;
        this.color = color;
        this.party = party
        this.profession = profession
    }

    setAccount(amount) {
        this.account = amount;
    }

    decreseAccount(amount) {
        this.account = this.account - amount;
    }

    increaseAccount(amount) {
        this.account = this.account + amount;
    }


    getAccount() {
        return this.account;
    }

}