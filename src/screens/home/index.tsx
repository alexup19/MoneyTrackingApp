import React from 'react';

import {StatusBar, FlatList} from 'react-native';

import {SafeArea, TransactionCard} from 'atoms';

import {HomeScreenProps} from './types';
import {Transaction, TransactionTypes} from 'utils/general-types';
import {AddButton, Container, ItemSeparator} from './styles';

import {useTransactionStore} from 'store/transaction-store';
import {RouteNames} from 'navigation/route-names';

import {AccountInfo} from './components';

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {transactions} = useTransactionStore();

  const addIncome = () =>
    navigation.navigate(RouteNames.transaction, {
      type: TransactionTypes.income,
    });

  const addExpense = () =>
    navigation.navigate(RouteNames.transaction, {
      type: TransactionTypes.expense,
    });

  const _renderItem = ({item}: {item: Transaction}) => (
    <TransactionCard transaction={item} />
  );

  const _keyExtractor = (item: Transaction) => String(item.id);

  return (
    <SafeArea backgroundColor="#FFFFFF">
      <StatusBar barStyle="dark-content" />
      <Container>
        <AccountInfo />
        <AddButton onPress={addIncome} />
        <AddButton onPress={addExpense} />
        <FlatList
          data={transactions}
          renderItem={_renderItem}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={_keyExtractor}
        />
      </Container>
    </SafeArea>
  );
};
