import React from 'react';

import {FlashList} from '@shopify/flash-list';

import {TransactionCard} from 'atoms';

import {Regular1, Title3} from 'theme/text';
import {Transaction} from 'utils/general-types';
import {verticalScale} from 'utils/scaling';

import {ListHeader, ItemSeparator, listStyles, Empty} from './styles';
import {RouteProps} from './types';

export const TransactionList = ({transactions, title}: RouteProps) => {
  const _renderItem = ({item}: {item: Transaction}) => (
    <TransactionCard transaction={item} />
  );

  const _listHeaderComponent = () => (
    <ListHeader>
      <Title3>{title}</Title3>
    </ListHeader>
  );

  const _keyExtractor = (item: Transaction) => String(item.id);

  if (transactions.length) {
    return (
      <FlashList
        data={transactions}
        renderItem={_renderItem}
        ListHeaderComponent={_listHeaderComponent}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={_keyExtractor}
        contentContainerStyle={listStyles.container}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={verticalScale(90)}
      />
    );
  }

  return (
    <Empty>
      <Regular1>No transactions available.</Regular1>
    </Empty>
  );
};
