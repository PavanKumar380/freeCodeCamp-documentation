class BankAccount {
  
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amt)  {
    if(amt > 0) {
      this.transactions.push({type: 'deposit', amount: amt});
      this.balance += amt;
      return `Successfully deposited $${amt}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amt) {
    if(amt <= 0 || amt > this.balance) {
      return "Insufficient balance or invalid amount."
    } else {
      this.transactions.push({type: 'withdraw', amount: amt});
      this.balance -= amt;
      return `Successfully withdrew $${amt}. New balance: $${this.balance}`;
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    return "Deposits: " + this.transactions.filter(tr => tr.type === 'deposit').map(tr => tr.amount).toString();
  }

  listAllWithdrawals() {
    return "Withdrawals: " + this.transactions.filter(tr => tr.type === 'withdraw').map(tr => tr.amount).toString();
  }

};

const myAccount = new BankAccount();
myAccount.deposit(100);
myAccount.withdraw(10);
myAccount.deposit(100);
myAccount.withdraw(10);
myAccount.deposit(100);