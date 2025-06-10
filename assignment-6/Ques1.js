/*
1. Create a class BankAccount with properties balance and owner and
 methods deposit(), withdraw(), and displayBalance().
*/

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }

  deposit(num) {
    this.balance += num;
  }
  withdraw(num) {
    if (num > this.balance) {
      console.log("low balance");
    } else {
      this.balance -= num;
    }
  }
  displayBalance() {
    console.log(`the balance of ${this.owner} is  ${this.balance}`);
  }
}

let account = new BankAccount(25000, "mansahib");

account.deposit(200);
account.withdraw(500);
account.displayBalance();
