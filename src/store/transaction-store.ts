import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Transaction, TransactionTypes} from 'utils/general-types';

import {useUserStore} from './user-store';

interface TransactionState {
  transactions: Transaction[];
  totalAmount: number;
  totalIncome: number;
  totalExpenses: number;
  addIncome: (newIncome: number) => void;
  addExpense: (newExpense: number) => void;
  addTransaction: (newTransaction: Transaction) => void;
  editTransaction: (transactionToEdit: Transaction) => void;
  removeTransaction: (transactionToRemove: Transaction) => void;
  getTransaction: (transactionId: number) => Transaction | undefined;
  getTransactions: () => Transaction[];
}

const addTransaction = (
  state: TransactionState,
  newTransaction: Transaction,
) => ({
  transactions: [...state.transactions, newTransaction],
  totalAmount:
    newTransaction.type === TransactionTypes.income
      ? state.totalAmount + newTransaction.amount
      : state.totalAmount - newTransaction.amount,
  totalIncome:
    newTransaction.type === TransactionTypes.income
      ? state.totalIncome + newTransaction.amount
      : state.totalIncome,
  totalExpenses:
    newTransaction.type === TransactionTypes.expense
      ? state.totalExpenses + newTransaction.amount
      : state.totalExpenses,
});

const removeTransaction = (
  state: TransactionState,
  transactionToRemove: Transaction,
) => ({
  transactions: [
    ...state.transactions.filter(
      (transaction: Transaction) => transaction.id !== transactionToRemove.id,
    ),
  ],
  totalAmount:
    transactionToRemove.type === TransactionTypes.income
      ? state.totalAmount - transactionToRemove.amount
      : state.totalAmount + transactionToRemove.amount,
  totalIncome:
    transactionToRemove.type === TransactionTypes.income
      ? state.totalIncome - transactionToRemove.amount
      : state.totalIncome,
  totalExpenses:
    transactionToRemove.type === TransactionTypes.expense
      ? state.totalExpenses - transactionToRemove.amount
      : state.totalExpenses,
});

const editTransaction = (
  state: TransactionState,
  transactionToEdit: Transaction,
) => ({
  transactions: state.transactions.map((transaction: Transaction) =>
    transaction.id === transactionToEdit.id ? transactionToEdit : transaction,
  ),
  totalAmount:
    transactionToEdit.type === TransactionTypes.income
      ? state.totalAmount + transactionToEdit.amount
      : state.totalAmount - transactionToEdit.amount,
  totalIncome:
    transactionToEdit.type === TransactionTypes.income
      ? state.totalIncome + transactionToEdit.amount
      : state.totalIncome,
  totalExpenses:
    transactionToEdit.type === TransactionTypes.expense
      ? state.totalExpenses + transactionToEdit.amount
      : state.totalExpenses,
});

const addIncome = (state: TransactionState, newIncome: number) => ({
  totalIncome: state.totalIncome + newIncome,
  totalAmount: state.totalAmount + newIncome,
});

const addExpense = (state: TransactionState, newExpense: number) => ({
  totalExpenses: state.totalIncome + newExpense,
  totalAmount: state.totalAmount - newExpense,
});

const getTransaction = (transactions: Transaction[], transactionId: number) =>
  transactions.find(
    (transaction: Transaction) => transaction.id === transactionId,
  );

const getTransactions = (transactions: Transaction[]) =>
  transactions.filter(
    (transaction: Transaction) =>
      transaction.userEmail === useUserStore.getState().user.email,
  );

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      transactions: [],
      totalAmount: 0,
      totalIncome: 0,
      totalExpenses: 0,
      addIncome: (newIncome: number) =>
        set((state: TransactionState) => addIncome(state, newIncome)),
      addExpense: (newExpense: number) =>
        set((state: TransactionState) => addExpense(state, newExpense)),
      addTransaction: (newTransaction: Transaction) =>
        set((state: TransactionState) => addTransaction(state, newTransaction)),
      removeTransaction: (transactionToRemove: Transaction) =>
        set((state: TransactionState) =>
          removeTransaction(state, transactionToRemove),
        ),
      editTransaction: (transactionToEdit: Transaction) =>
        set((state: TransactionState) =>
          editTransaction(state, transactionToEdit),
        ),
      getTransaction: (transactionId: number) =>
        getTransaction(get().transactions, transactionId),
      getTransactions: () => getTransactions(get().transactions),
    }),
    {
      name: 'transaction-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
