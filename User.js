class User{

    constructor(userName, email){
        this.name = userName
        this.email = email
        this.accountBalance = 0 
    }
    makeDeposit(amount){
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
        return this;
    }
    displayBalance(){
        console.log(this.name, this.accountBalance);
        
    }
    transferAmount(otherUser, amount){
        this.accountBalance -= amount;
        otherUser.accountBalance +=amount;
        console.log(amount, "has been transfered to", otherUser.name);
    }
}

const percy = new User("Percy", "lordPercyi@gmail.com");
const baldrick = new User("Baldrick", "turnip@yahoo.com");
const adder = new User("Adder", "blackAdder@lordship.uk");

percy.name = "Lord Percy";

// percy.makeDeposit(200);
// percy.makeDeposit(300);
// percy.makeDeposit(500);
// percy.makeWithdrawal(50);
// percy.displayBalance();

percy.makeDeposit(200).makeDeposit(300).makeDeposit(500).makeWithdrawal(50).displayBalance();

// baldrick.makeDeposit(100);
// baldrick.makeDeposit(150);
// baldrick.makeWithdrawal(20);
// baldrick.makeWithdrawal(30);
// baldrick.displayBalance();

baldrick.makeDeposit(100).makeDeposit(150).makeWithdrawal(20).makeWithdrawal(30).displayBalance();

// adder.makeDeposit(700);
// adder.makeWithdrawal(20);
// adder.makeWithdrawal(40);
// adder.makeWithdrawal(60);
// adder.displayBalance();

adder.makeDeposit(700).makeWithdrawal(20).makeWithdrawal(40).makeWithdrawal(60).displayBalance();


percy.transferAmount(adder, 30);

percy.displayBalance();
adder.displayBalance();