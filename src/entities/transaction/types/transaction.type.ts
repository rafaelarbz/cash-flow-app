import { PaymentMethodEnum } from "../enums/payment-method.enum"
import { TransactionTypeEnum } from "../enums/transaction-type.enum"

export interface Transaction {
    id: string,
    description: string,
    quantity: number,
    type: typeof TransactionTypeEnum,
    paymentMethod: typeof PaymentMethodEnum,
    date: string,
    amount: number,
    isZeroed: boolean,
    repeat: boolean
}