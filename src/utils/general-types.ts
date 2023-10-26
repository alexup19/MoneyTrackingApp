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
    color: '#FCAC12',
    secondaryColor: '#FCEED4',
  },
  {
    id: TransactionCategoryTypes.subscription,
    title: 'Subscription',
    color: '#7F3DFF',
    secondaryColor: '#EEE5FF',
  },
  {
    id: TransactionCategoryTypes.food,
    title: 'Food',
    color: '#FD3C4A',
    secondaryColor: '#FDD5D7',
  },
  {
    id: TransactionCategoryTypes.transportation,
    title: 'Transportation',
    color: '#0077FF',
    secondaryColor: '#BDDCFF',
  },
  {
    id: TransactionCategoryTypes.salary,
    title: 'Salary',
    color: '#00A86B',
    secondaryColor: '#CFFAEA',
  },
  {
    id: TransactionCategoryTypes.other,
    title: 'Other',
    color: '#f533ad',
    secondaryColor: '#ffccec',
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
