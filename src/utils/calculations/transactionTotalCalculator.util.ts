import { Transaction } from "../../entities/transaction/types/transaction.type"
import { Totals } from "../../entities/transaction/types/totals.type"

export const calculateTotals = (transactions: Transaction[]): Totals => {
    return transactions.reduce(
      (acc, transaction) => {
        const { quantity, amount, type, paymentMethod } = transaction
  
        if (type === "income") {
          acc.totalIncome += quantity * amount;
          acc.paymentMethods[paymentMethod] = acc.paymentMethods[paymentMethod] || { income: 0, expense: 0 };
          acc.paymentMethods[paymentMethod].income += quantity * amount;
        } else if (type === "expense") {
          acc.totalExpense += amount;
          acc.paymentMethods[paymentMethod] = acc.paymentMethods[paymentMethod] || { income: 0, expense: 0 };
          acc.paymentMethods[paymentMethod].expense += quantity * amount;
        }
  
        acc.balance = acc.totalIncome - acc.totalExpense

        if (acc.paymentMethods[paymentMethod].income === 0 && acc.paymentMethods[paymentMethod].expense === 0) {
          delete acc.paymentMethods[paymentMethod];
        }
  
        return acc
      },
      {
        totalIncome: 0,
        totalExpense: 0,
        balance: 0,
        paymentMethods: {},
      } as Totals
    )
}