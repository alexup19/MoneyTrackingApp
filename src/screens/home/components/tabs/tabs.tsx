import {TransactionCard} from 'components/atoms';
import * as React from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {ListHeader, ItemSeparator} from 'screens/home/styles';
import {useTransactionStore} from 'store/transaction-store';
import {Regular1, Title3} from 'theme/text';
import {Transaction} from 'utils/general-types';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import {Colors} from 'theme/colors';

import {TabButton, tabBarStyles} from './styles';

dayjs.extend(isBetween);

const Route = ({transactions, title}) => {
  const _renderItem = ({item}: {item: Transaction}) => (
    <TransactionCard transaction={item} />
  );

  const _listHeaderComponent = () => (
    <ListHeader>
      <Title3>{title}</Title3>
    </ListHeader>
  );

  const _keyExtractor = (item: Transaction) => String(item.id);

  return (
    <FlatList
      data={transactions}
      renderItem={_renderItem}
      ListHeaderComponent={_listHeaderComponent}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={_keyExtractor}
      contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 90}}
      showsVerticalScrollIndicator={false}
    />
  );
};

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

  const {transactions} = useTransactionStore();

  const getTransactions = (startDate, endDate) =>
    transactions.filter(transaction =>
      dayjs(dayjs(transaction.date).format('YYYY-MM-DD')).isBetween(
        startDate,
        endDate,
        'day',
        '[]',
      ),
    );

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'today':
        return (
          <Route
            title={route.title}
            transactions={getTransactions(
              dayjs().format('YYYY-MM-DD'),
              dayjs().format('YYYY-MM-DD'),
            )}
          />
        );
      case 'week':
        return (
          <Route
            title="This Week"
            transactions={getTransactions(
              dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
              dayjs().format('YYYY-MM-DD'),
            )}
          />
        );
      case 'month':
        return (
          <Route
            title="This Month"
            transactions={getTransactions(
              dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
              dayjs().format('YYYY-MM-DD'),
            )}
          />
        );
      case 'year':
        return (
          <Route
            title="This Year"
            transactions={getTransactions(
              dayjs().subtract(1, 'year').format('YYYY-MM-DD'),
              dayjs().format('YYYY-MM-DD'),
            )}
          />
        );
      default:
        return <Route title="All Transactions" transactions={transactions} />;
    }
  };

  const renderTabBar = props => (
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
