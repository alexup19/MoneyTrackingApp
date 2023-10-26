import {Colors} from 'theme/colors';

export enum TransactionTypes {
  expense = 'Expense',
  income = 'Income',
}

export type PickerItem = {
  id: string;
  title: string;
};

export type TransactionCategory = PickerItem & {
  color: string;
  secondaryColor: string;
};

export type User = {
  name: string;
  email: string;
  password: string;
  photo?: string;
};

export enum TransactionCategoryTypes {
  shopping = 'shopping',
  subscription = 'subscription',
  food = 'food',
  transportation = 'transportation',
  salary = 'salary',
  other = 'other',
}

export const TransactionCategories: TransactionCategory[] = [
  {
    id: TransactionCategoryTypes.shopping,
    title: 'Shopping',
    color: Colors.yellow[100],
    secondaryColor: Colors.yellow[20],
  },
  {
    id: TransactionCategoryTypes.subscription,
    title: 'Subscription',
    color: Colors.violet[100],
    secondaryColor: Colors.violet[20],
  },
  {
    id: TransactionCategoryTypes.food,
    title: 'Food',
    color: Colors.red[100],
    secondaryColor: Colors.red[20],
  },
  {
    id: TransactionCategoryTypes.transportation,
    title: 'Transportation',
    color: Colors.blue[100],
    secondaryColor: Colors.blue[20],
  },
  {
    id: TransactionCategoryTypes.salary,
    title: 'Salary',
    color: Colors.green[100],
    secondaryColor: Colors.green[20],
  },
  {
    id: TransactionCategoryTypes.other,
    title: 'Other',
    color: Colors.pink[100],
    secondaryColor: Colors.pink[20],
  },
];

export type Transaction = {
  id: number;
  type: TransactionTypes;
  title: string;
  date: Date;
  description: string;
  category: TransactionCategory;
  attachment: string;
  amount: number;
};
