import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Transaction, TransactionTypes} from 'utils/general-types';

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
  getTransaction: (transactionId: Number) => Transaction;
}

const addTransaction = (set, newTransaction: Transaction) =>
  set((state: TransactionState) => ({
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
  }));

const removeTransaction = (set, transactionToRemove: Transaction) =>
  set((state: TransactionState) => ({
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
  }));

const editTransaction = (set, transactionToEdit: Transaction) =>
  set((state: TransactionState) => ({
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
  }));

const addIncome = (set, newIncome: number) =>
  set((state: TransactionState) => ({
    totalIncome: state.totalIncome + newIncome,
    totalAmount: state.totalAmount + newIncome,
  }));

const addExpense = (set, newExpense: number) =>
  set((state: TransactionState) => ({
    totalExpenses: state.totalIncome + newExpense,
    totalAmount: state.totalAmount - newExpense,
  }));

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      transactions: [],
      totalAmount: 0,
      totalIncome: 0,
      totalExpenses: 0,
      addIncome: (newIncome: number) => addIncome(set, newIncome),
      addExpense: (newExpense: number) => addExpense(set, newExpense),
      addTransaction: (newTransaction: Transaction) =>
        addTransaction(set, newTransaction),
      removeTransaction: (transactionToRemove: Transaction) =>
        removeTransaction(set, transactionToRemove),
      editTransaction: (transactionToEdit: Transaction) =>
        editTransaction(set, transactionToEdit),
      getTransaction: (transactionId: Number) =>
        get().transactions.find(
          (transaction: Transaction) => transaction.id === transactionId,
        ),
    }),
    {
      name: 'transaction-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
