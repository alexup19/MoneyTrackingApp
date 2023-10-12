import React, {useState} from 'react';

import {StatusBar} from 'react-native';

import {
  BaseHeader,
  BaseTextInput,
  BaseButton,
  BasePickerButton,
  SafeArea,
  AttachmentButton,
} from 'atoms';
import {DatePickerButton} from 'molecules';

import {
  Form,
  TextContainer,
  TitleText,
  MoneyContainer,
  MoneySign,
  TransactionInput,
  InputContainer,
} from './styles';

export enum TransactionTypes {
  expense = 'Expense',
  income = 'Income',
}

export const TransactionScreen = () => {
  const type = TransactionTypes.expense;

  const [amount, setAmount] = useState('0');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState('');
  const [wallet, setWallet] = useState(null);

  const backgroundColor =
    type === TransactionTypes.expense ? '#FD3C4A' : '#00A86B';

  return (
    <SafeArea backgroundColor={backgroundColor}>
      <StatusBar barStyle="light-content" />
      <BaseHeader title={type} canGoBack />
      <Form>
        <TextContainer>
          <TitleText>How much?</TitleText>
          <MoneyContainer>
            <MoneySign>$</MoneySign>
            <TransactionInput value={amount} onChangeText={setAmount} />
          </MoneyContainer>
        </TextContainer>
        <InputContainer>
          <BaseTextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <DatePickerButton selectedDate={date} setDate={setDate} />
          <BasePickerButton value={category} placeholder="Category" />
          <BaseTextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <AttachmentButton />
          <BasePickerButton value={wallet} placeholder="Wallet" />
          <BaseButton title="Continue" />
        </InputContainer>
      </Form>
    </SafeArea>
  );
};
