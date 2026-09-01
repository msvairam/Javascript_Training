function banking() {
    let balance = 0;

    return {
        deposit: (amount) => {
            balance += amount;
        },
        withdraw: (amount) => {
            balance -= amount;
        },
        balance: () => {
            return balance;
        }
    }
}

const Banking = banking();

Banking.deposit(1000);
console.log(Banking.balance());
Banking.withdraw(1000);
console.log(Banking.balance());