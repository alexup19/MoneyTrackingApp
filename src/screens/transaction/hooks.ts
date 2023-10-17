import {useState} from 'react';
import {useTransactionStore} from 'store/transaction-store';

import {
  TransactionCategory,
  PickerItem,
  TransactionTypes,
} from 'utils/general-types';

export const useTransaction = (
  type: TransactionTypes,
  transactionId: number,
) => {
  const {
    addTransaction,
    editTransaction,
    getTransaction,
    addIncome,
    addExpense,
  } = useTransactionStore();

  const transaction = getTransaction(transactionId);

  const [amount, setAmount] = useState(String(transaction?.amount || '0'));
  const [title, setTitle] = useState(transaction?.title || '');
  const [date, setDate] = useState(
    transaction?.date ? new Date(transaction?.date) : new Date(),
  );
  const [category, setCategory] = useState<TransactionCategory>(
    transaction?.category || {
      title: '',
      id: '',
      color: '',
      secondaryColor: '',
    },
  );
  const [description, setDescription] = useState(
    transaction?.description || '',
  );
  const [wallet, setWallet] = useState<PickerItem>({title: '', id: ''});

  const saveTransaction = () => {
    if (transactionId) {
      if (transaction?.type === TransactionTypes.income) {
        addIncome(transaction?.amount * -1);
      } else {
        addExpense(transaction?.amount * -1);
      }

      editTransaction({
        id: transaction.id,
        title,
        description,
        amount: Number(amount),
        date,
        category,
        type,
        attachment: '',
      });
    } else {
      addTransaction({
        id: Date.now(),
        title,
        description,
        amount: Number(amount),
        date,
        category,
        type,
        attachment: '',
      });
    }
  };

  return {
    amount,
    title,
    date,
    category,
    description,
    wallet,
    setAmount,
    setTitle,
    setDate,
    setCategory,
    setDescription,
    setWallet,
    saveTransaction,
  };
};
