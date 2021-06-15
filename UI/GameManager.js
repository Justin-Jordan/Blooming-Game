
party = new Party();
bank  = new Bank(party);
profession = new Profession();
profession.name = "coiffeur";
player = new Player("Justin", "blue", party, profession);
bank.addPlayer(player);
player.setAccount(100000);
bank.decreasePlayerAccount(player, 500);
console.log(party.rollDice());
console.log(bank.getAllPlayers());
console.log(profession.name);
console.log(player.party);