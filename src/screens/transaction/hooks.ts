import {useState} from 'react';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

import {useTransactionStore} from 'store/transaction-store';
import {useUserStore} from 'store/user-store';
import {PickerItem, TransactionTypes} from 'utils/general-types';

import {FormValuesProps} from './types';

const schema = yup.object().shape({
  amount: yup.string().required('Amount is required'),
  title: yup.string().required('Title is required'),
  category: yup
    .object()
    .shape({
      title: yup.string().required(),
      id: yup.string().required(),
      color: yup.string().required(),
      secondaryColor: yup.string().required(),
    })
    .required('Category is required'),
});

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

  const {user} = useUserStore();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: String(transaction?.amount || ''),
      title: transaction?.title || '',
      category: transaction?.category || {
        title: '',
        id: '',
        color: '',
        secondaryColor: '',
      },
    },
  });

  const [date, setDate] = useState(
    transaction?.date ? new Date(transaction?.date) : new Date(),
  );
  const [description, setDescription] = useState(
    transaction?.description || '',
  );
  const [attachment, setAttachment] = useState(transaction?.attachment || '');
  const [wallet, setWallet] = useState<PickerItem>({title: '', id: ''});

  const saveTransaction = ({title, category, amount}: FormValuesProps) => {
    if (transaction?.id) {
      if (transaction.type === TransactionTypes.income) {
        addIncome(transaction.amount * -1);
      } else {
        addExpense(transaction.amount * -1);
      }

      editTransaction({
        id: transaction.id,
        title,
        description,
        amount: Number(amount),
        date,
        category,
        type,
        attachment,
        userEmail: user.email,
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
        attachment,
        userEmail: user.email,
      });
    }
  };

  return {
    control,
    date,
    description,
    errors,
    attachment,
    wallet,
    handleSubmit,
    setDate,
    setDescription,
    setWallet,
    saveTransaction,
    setAttachment,
  };
};
