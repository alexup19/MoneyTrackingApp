import React from 'react';

import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';

import {
  ShoppingBagIcon,
  RecurringBillIcon,
  RestaurantIcon,
  SalaryIcon,
  TransportationIcon,
} from 'icons';

import {RouteNames} from 'navigation/route-names';
import {Colors} from 'theme/colors';
import {Regular1, Regular2, Small, Title1} from 'theme/text';
import {TransactionCategoryTypes, TransactionTypes} from 'utils/general-types';

import {Card, CardIcon, TextContainer, SubtitleTextContainer} from './styles';
import {CardNavigationProps, TransactionCardProps} from './types';

const TransactionIcon = ({id}: {id: string}) => {
  switch (id) {
    case TransactionCategoryTypes.food:
      return <RestaurantIcon />;
    case TransactionCategoryTypes.shopping:
      return <ShoppingBagIcon />;
    case TransactionCategoryTypes.transportation:
      return <TransportationIcon />;
    case TransactionCategoryTypes.salary:
      return <SalaryIcon />;
    case TransactionCategoryTypes.subscription:
      return <RecurringBillIcon />;
    default:
      return <Title1 color={Colors.pink[100]}>...</Title1>;
  }
};

export const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
}) => {
  const {title, amount, date, category, type, id} = transaction;

  const navigation = useNavigation<CardNavigationProps>();

  const goToDetails = () => {
    navigation.navigate(RouteNames.transactionDetail, {transactionId: id});
  };

  return (
    <Card onPress={goToDetails}>
      <CardIcon color={category.secondaryColor}>
        <TransactionIcon id={category.id} />
      </CardIcon>
      <TextContainer>
        <SubtitleTextContainer>
          <Regular1>{category.title}</Regular1>
          <Regular2
            color={
              type === TransactionTypes.expense
                ? Colors.red[100]
                : Colors.green[100]
            }>
            {type === TransactionTypes.expense ? '-' : '+'} ${amount}
          </Regular2>
        </SubtitleTextContainer>
        <SubtitleTextContainer>
          <Small color={Colors.dark[25]}>{title}</Small>
          <Small color={Colors.dark[25]}>
            {dayjs(date).format('DD/MM/YYYY')}
          </Small>
        </SubtitleTextContainer>
      </TextContainer>
    </Card>
  );
};
