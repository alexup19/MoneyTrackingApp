import React from 'react';

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

import {TransactionCategories, TransactionTypes} from 'utils/general-types';
import {RouteNames} from 'navigation/route-names';

import {useTransaction} from './hooks';
import {
  Form,
  TextContainer,
  TitleText,
  MoneyContainer,
  MoneySign,
  TransactionInput,
  InputContainer,
} from './styles';
import {TransactionScreenProps} from './types';

export const TransactionScreen: React.FC<TransactionScreenProps> = ({
  navigation,
  route,
}) => {
  const {type, transactionId = 0} = route.params;

  const {
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
  } = useTransaction(type, transactionId);

  const addNewTransaction = () => {
    saveTransaction();
    navigation.goBack();
  };

  const backgroundColor =
    type === TransactionTypes.expense ? '#FD3C4A' : '#00A86B';

  const onCategoryButtonPress = () =>
    navigation.navigate(RouteNames.picker, {
      title: 'Categories',
      selectedItem: category,
      setSelectedItem: setCategory,
      items: TransactionCategories,
    });

  const onWalletButtonPress = () =>
    navigation.navigate(RouteNames.picker, {
      title: 'Wallets',
      selectedItem: wallet,
      setSelectedItem: setWallet,
      items: [],
    });

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
          <BasePickerButton
            value={category.title}
            placeholder="Category"
            onPress={onCategoryButtonPress}
          />
          <BaseTextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <AttachmentButton />
          <BasePickerButton
            value={wallet.title}
            placeholder="Wallet"
            onPress={onWalletButtonPress}
          />
          <BaseButton title="Continue" onPress={addNewTransaction} />
        </InputContainer>
      </Form>
    </SafeArea>
  );
};
