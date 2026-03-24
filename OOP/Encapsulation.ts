class BankAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }

  private receiveSalary(amount: number): number {
    console.log('Salary received:', amount);
    this.balance += amount;
    return this.balance;
  }

  public notificateAboutMonthlySalaryIsReceived(): void {
    const newBalance = this.receiveSalary(1000);
    console.log(`Congrats, you have received the salary. New balance: ${newBalance}`);
  }
}

const account = new BankAccount(500);

account.notificateAboutMonthlySalaryIsReceived();

console.log(account.getBalance());

account.withdraw(250);

console.log(account.getBalance());
