// IAccount interface
interface IAccount {
  date_of_opening: Date;
  addCustomer: () => void;
  removeCustomer: () => void;
}

// Abstract class Account
abstract class Account {
  acc_no: string;
  balance: number;

  abstract debitAmount(amount: number): void;

  abstract creditAmount(amount: number): void;

  abstract getBalance(): number;
}

// Saving_Account class
class Saving_Account extends Account implements IAccount {
  date_of_opening: Date;
  min_balance: number;

  debitAmount(amount: number): void {}

  creditAmount(amount: number): void {}

  getBalance(): number {
    return this.balance;
  }

  addCustomer(): void {}

  removeCustomer(): void {}
}

// Current_Account class
class Current_Account extends Account implements IAccount {
  date_of_opening: Date;
  interest_rate: number;

  debitAmount(amount: number): void {}

  creditAmount(amount: number): void {}

  getBalance(): number {
    return this.balance;
  }

  addCustomer(): void {}

  removeCustomer(): void {}
}
