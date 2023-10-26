import React from 'react';

import {StatusBar} from 'react-native';

import {Controller} from 'react-hook-form';

import {
  BaseHeader,
  BaseTextInput,
  BaseButton,
  BasePickerButton,
  SafeArea,
} from 'atoms';
import {AttachmentButton, DatePickerButton} from 'molecules';

import {
  PickerItem,
  TransactionCategories,
  TransactionTypes,
} from 'utils/general-types';
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
  formStyles,
} from './styles';
import {TransactionScreenProps, FormValuesProps} from './types';

export const TransactionScreen: React.FC<TransactionScreenProps> = ({
  navigation,
  route,
}) => {
  const {type, transactionId = 0} = route.params;

  const {
    attachment,
    date,
    description,
    wallet,
    setDate,
    setDescription,
    setWallet,
    saveTransaction,
    setAttachment,
    control,
    handleSubmit,
    errors,
  } = useTransaction(type, transactionId);

  const addNewTransaction = (formValues: FormValuesProps) => {
    saveTransaction(formValues);
    navigation.goBack();
  };

  const backgroundColor =
    type === TransactionTypes.expense ? '#FD3C4A' : '#00A86B';

  const onCategoryButtonPress = (
    setValue: (value: PickerItem) => void,
    value: PickerItem,
  ) =>
    navigation.navigate(RouteNames.picker, {
      title: 'Categories',
      selectedItem: value,
      setSelectedItem: setValue,
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
          <TitleText color={errors.amount ? '#fd3c4a' : '#f1f1fa'}>
            How much?
          </TitleText>
          <MoneyContainer>
            <MoneySign color={errors.amount ? '#fd3c4a' : '#f1f1fa'}>
              $
            </MoneySign>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}}) => (
                <TransactionInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="0"
                  placeholderTextColor={errors.amount ? '#fd3c4a' : '#f1f1fa'}
                  keyboardType="numeric"
                />
              )}
              name="amount"
            />
          </MoneyContainer>
        </TextContainer>
        <InputContainer contentContainerStyle={formStyles.inputContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <BaseTextInput
                placeholder="Title"
                value={value}
                onChangeText={onChange}
                borderColor={errors.title ? '#fd3c4a' : ''}
              />
            )}
            name="title"
          />
          <DatePickerButton selectedDate={date} setDate={setDate} />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => (
              <BasePickerButton
                value={value.title}
                placeholder="Category"
                borderColor={errors.category ? '#fd3c4a' : ''}
                onPress={() => onCategoryButtonPress(onChange, value)}
              />
            )}
            name="category"
          />
          <BaseTextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <AttachmentButton
            attachment={attachment}
            setAttachment={setAttachment}
          />
          <BasePickerButton
            value={wallet.title}
            placeholder="Wallet"
            onPress={onWalletButtonPress}
          />
          <BaseButton
            title="Continue"
            onPress={handleSubmit(addNewTransaction)}
          />
        </InputContainer>
      </Form>
    </SafeArea>
  );
};
