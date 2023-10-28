import React from 'react';

import {useWindowDimensions} from 'react-native';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import {TabView, TabBar, TabBarProps, Route} from 'react-native-tab-view';

import {TransactionList} from 'molecules';

import {Colors} from 'theme/colors';
import {Regular1} from 'theme/text';
import {useTransactionStore} from 'store/transaction-store';

import {TabButton, tabBarStyles} from './styles';

dayjs.extend(isBetween);

const renderTabBar = (props: TabBarProps<Route>) => (
  <TabBar
    {...props}
    renderLabel={({focused, route}) => {
      return (
        <TabButton focused={focused}>
          <Regular1 color={focused ? Colors.yellow[100] : Colors.light[20]}>
            {route.title}
          </Regular1>
        </TabButton>
      );
    }}
    tabStyle={tabBarStyles.tab}
    style={tabBarStyles.bar}
    indicatorStyle={tabBarStyles.indicator}
  />
);

export const Tabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'today', title: 'Today'},
    {key: 'week', title: 'Week'},
    {key: 'month', title: 'Month'},
    {key: 'year', title: 'Year'},
    {key: 'all', title: 'All'},
  ]);

  const {getTransactions} = useTransactionStore();
  const transactions = getTransactions();

  const filterTransactions = (startDate: string, endDate: string) =>
    transactions.filter(transaction =>
      dayjs(dayjs(transaction.date).format('YYYY-MM-DD')).isBetween(
        startDate,
        endDate,
        'day',
        '[]',
      ),
    );

  const renderScene = ({route}: {route: Route}) => {
    switch (route.key) {
      case 'today':
        return (
          <TransactionList
            title={route.title}
            transactions={filterTransactions(
              dayjs().format('YYYY-MM-DD'),
              dayjs().format('YYYY-MM-DD'),
            )}
          />
        );
      case 'week':
        return (
          <TransactionList
            title="This Week"
            transactions={filterTransactions(
              dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
              dayjs().format('YYYY-MM-DD'),
            )}
          />
        );
      case 'month':
        return (
          <TransactionList
            title="This Month"
            transactions={filterTransactions(
              dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
              dayjs().format('YYYY-MM-DD'),
            )}
          />
        );
      case 'year':
        return (
          <TransactionList
            title="This Year"
            transactions={filterTransactions(
              dayjs().subtract(1, 'year').format('YYYY-MM-DD'),
              dayjs().format('YYYY-MM-DD'),
            )}
          />
        );
      default:
        return (
          <TransactionList
            title="All Transactions"
            transactions={transactions}
          />
        );
    }
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};
