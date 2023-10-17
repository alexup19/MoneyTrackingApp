import React, {useCallback, useMemo, useRef} from 'react';

import {StatusBar, View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import dayjs from 'dayjs';
import BottomSheet from '@gorhom/bottom-sheet';

import {BaseHeader, BaseButton} from 'atoms';
import {TrashIcon} from 'icons';

import {TransactionDetailScreenProps} from './types';
import {useTransactionStore} from 'store/transaction-store';
import {
  Header,
  SafeAreaView,
  AmountText,
  TitleText,
  DateContainer,
  DateText,
  InfoCard,
  InfoCardTitle,
  InfoCardDescription,
  InfoTextContainer,
  Body,
  DashSeparator,
  BodyText,
  BodyTitleText,
  Attachment,
  Container,
  InfoContainer,
  TrashButton,
} from './styles';
import {RouteNames} from 'navigation/route-names';

export const TransactionDetailScreen: React.FC<
  TransactionDetailScreenProps
> = ({navigation, route}) => {
  const {transactionId} = route.params;

  const {removeTransaction, getTransaction} = useTransactionStore();

  const transaction = getTransaction(transactionId);

  const {amount, description, title, type, category, date} = transaction;

  const insets = useSafeAreaInsets();

  const deleteTransaction = () => {
    removeTransaction(transaction);
    navigation.goBack();
  };

  const editTransaction = () => {
    navigation.navigate(RouteNames.transaction, {type, transactionId});
  };

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <SafeAreaView type={type} />
      <Header topInset={insets.top} type={type}>
        <BaseHeader
          title="Detail Transaction"
          rightButton={
            <TrashButton onPress={deleteTransaction}>
              <TrashIcon />
            </TrashButton>
          }
          canGoBack
        />
        <AmountText>${amount}</AmountText>
        <TitleText>{title}</TitleText>
        <DateContainer>
          <DateText>{dayjs(date).format('dddd D MMMM YYYY')}</DateText>
          <DateText>{dayjs(date).format('h:mm A')}</DateText>
        </DateContainer>
      </Header>
      <InfoCard>
        <InfoTextContainer>
          <InfoCardTitle>Type</InfoCardTitle>
          <InfoCardDescription>{type}</InfoCardDescription>
        </InfoTextContainer>
        <InfoTextContainer>
          <InfoCardTitle>Category</InfoCardTitle>
          <InfoCardDescription>{category.title}</InfoCardDescription>
        </InfoTextContainer>
        <InfoTextContainer>
          <InfoCardTitle>Wallet</InfoCardTitle>
          <InfoCardDescription>N/A</InfoCardDescription>
        </InfoTextContainer>
      </InfoCard>
      <InfoContainer>
        <Body>
          <DashSeparator />
          <BodyTitleText>Description</BodyTitleText>
          <BodyText>{description || 'N/A'}</BodyText>
          <BodyTitleText>Attachment</BodyTitleText>
          <Attachment />
        </Body>
        <BaseButton title="Edit" onPress={editTransaction} />
      </InfoContainer>
      {/* <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet> */}
    </Container>
  );
};
