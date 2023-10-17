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
import {TransactionCategoryTypes, TransactionTypes} from 'utils/general-types';

import {
  Card,
  CardIcon,
  CardTitle,
  TextContainer,
  CardSubTitle,
  SubtitleTextContainer,
  AmountText,
  OtherText,
} from './styles';
import {TransactionCardProps} from './types';
import {RouteNames} from 'navigation/route-names';

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
      return <OtherText>...</OtherText>;
  }
};

export const TransactionCard = ({transaction}: TransactionCardProps) => {
  const {title, amount, description, date, category, type, id} = transaction;

  const navigation = useNavigation();

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
          <CardTitle>{category.title}</CardTitle>
          <AmountText expense={type === TransactionTypes.expense}>
            {type === TransactionTypes.expense ? '-' : '+'} ${amount}
          </AmountText>
        </SubtitleTextContainer>
        <SubtitleTextContainer>
          <CardSubTitle>{title}</CardSubTitle>
          <CardSubTitle>{dayjs(date).format('DD/MM/YYYY')}</CardSubTitle>
        </SubtitleTextContainer>
      </TextContainer>
    </Card>
  );
};
