class BankAccount {
    constructor(intRate = 0, balance = 0, accountName){
        this.accountName = accountName;
        this.intRate = intRate;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance +=amount;
        return this;
        }
    withdraw(amount) {
        this.balance -=amount;
        return this;
        }
    displayAccountInfo() {
        console.log(`Account ${this.accountName} balance: $${this.balance}. Interest rate: ${this.intRate}`);
        }
    yieldInterest(rate) {
        this.balance += this.balance * rate;
        return this;
        }
    }
    

class User{

    constructor(name, email){
        this.name = name;
        this.email = email;
        this.account = new BankAccount();
    }
    depositMethod(amount, accountName) {
        this.account.deposit(amount);
        console.log(`${this.name}'s account ${accountName} balance is ${this.account.balance}`);
        return this;
    }
    withdrawMethod(amount) {
        this.account.withdraw(amount);
        return this;
    }
    displayUserInfo(){
        this.displayAccountInfo(this.accountName);
        console.log(`Name: ${this.name}. Account Balance: ${this.account.balance}`);
        return this;
    }

}

const markAccount1 = new User("Mark", "mark@bank.com");
const markAccount2 = new User("Mark", "mark@bank.com");
const sam = new User("Samantha", 200);


markAccount1.depositMethod(200, "College Fund");
markAccount2.depositMethod(300, "Rent");
sam.depositMethod(300, "Groceries");