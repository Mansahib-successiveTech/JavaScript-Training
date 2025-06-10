/*
1. Create a class BankAccount with properties balance and owner and
 methods deposit(), withdraw(), and displayBalance().
*/

class BankAccount {
  constructor(balance, owner) {
    this.mybalance = balance;
    this.ownerName = owner;
  }

  deposit(num) {
    this.mybalance += num;
  }
  withdraw(num) {
    if (num > this.mybalance) {
      console.log("low balance");
    } else {
      this.mybalance -= num;
    }
  }
  displayBalance() {
    console.log(`the balance of ${this.ownerName} is  ${this.mybalance}`);
  }
}

let account = new BankAccount(25000, "mansahib");

account.deposit(200);
account.withdraw(500);
account.displayBalance();
