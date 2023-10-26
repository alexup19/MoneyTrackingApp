import React, {useState} from 'react';

import {StatusBar} from 'react-native';

import dayjs from 'dayjs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BaseHeader, BaseButton, PhotoModal} from 'atoms';
import {TrashIcon} from 'icons';

import {RouteNames} from 'navigation/route-names';
import {useTransactionStore} from 'store/transaction-store';
import {Colors} from 'theme/colors';
import {TitleX, Regular1, Regular2, Regular3, Small} from 'theme/text';

import {TransactionDetailScreenProps} from './types';
import {
  Header,
  SafeAreaView,
  DateContainer,
  InfoCard,
  InfoTextContainer,
  Body,
  DashSeparator,
  Attachment,
  AttachmentButton,
  Container,
  InfoContainer,
  TrashButton,
} from './styles';

export const TransactionDetailScreen: React.FC<
  TransactionDetailScreenProps
> = ({navigation, route}) => {
  const {transactionId} = route.params;

  const {removeTransaction, getTransaction} = useTransactionStore();

  const [isModalVisible, setVisible] = useState(false);

  const transaction = getTransaction(transactionId);

  const {amount, description, title, type, category, date, attachment} =
    transaction;

  const insets = useSafeAreaInsets();

  const deleteTransaction = () => {
    removeTransaction(transaction);
    navigation.goBack();
  };

  const editTransaction = () => {
    navigation.navigate(RouteNames.transaction, {type, transactionId});
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <SafeAreaView type={type} />
      <Header type={type}>
        <BaseHeader
          title="Detail Transaction"
          rightButton={
            <TrashButton onPress={deleteTransaction}>
              <TrashIcon />
            </TrashButton>
          }
          canGoBack
        />
        <TitleX align="center" color={Colors.light[80]} fontSize={48}>
          ${amount}
        </TitleX>
        <Regular1 align="center" color={Colors.light[80]}>
          {title}
        </Regular1>
        <DateContainer>
          <Small color={Colors.light[80]}>
            {dayjs(date).format('dddd D MMMM YYYY')}
          </Small>
          <Small color={Colors.light[80]}>{dayjs(date).format('h:mm A')}</Small>
        </DateContainer>
      </Header>
      <InfoCard topInset={insets.top}>
        <InfoTextContainer>
          <Regular3 align="center" color={Colors.dark[25]}>
            Type
          </Regular3>
          <Regular2 align="center" color={Colors.dark[100]}>
            {type}
          </Regular2>
        </InfoTextContainer>
        <InfoTextContainer>
          <Regular3 align="center" color={Colors.dark[25]}>
            Category
          </Regular3>
          <Regular2 align="center" color={Colors.dark[100]}>
            {category.title}
          </Regular2>
        </InfoTextContainer>
        <InfoTextContainer>
          <Regular3 align="center" color={Colors.dark[25]}>
            Wallet
          </Regular3>
          <Regular2 align="center" color={Colors.dark[100]}>
            N/A
          </Regular2>
        </InfoTextContainer>
      </InfoCard>
      <InfoContainer>
        <Body>
          <DashSeparator />
          <Regular2 color={Colors.dark[25]}>Description</Regular2>
          <Regular1 color={Colors.dark[100]}>{description || 'N/A'}</Regular1>
          <Regular2 color={Colors.dark[25]}>Attachment</Regular2>
          <AttachmentButton onPress={() => setVisible(true)}>
            <Attachment source={attachment} />
          </AttachmentButton>
          <PhotoModal
            photo={attachment}
            visible={isModalVisible}
            onBackgroundPress={() => setVisible(false)}
          />
        </Body>
        <BaseButton title="Edit" onPress={editTransaction} />
      </InfoContainer>
    </Container>
  );
};
