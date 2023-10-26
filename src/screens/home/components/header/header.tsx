import React, {useCallback, useMemo, useRef} from 'react';

import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';

import {PlusIcon} from 'icons';

import {RouteNames} from 'navigation/route-names';
import {Colors} from 'theme/colors';
import {TransactionTypes} from 'utils/general-types';
import {verticalScale} from 'utils/scaling';
import {useUserStore} from 'store/user-store';

import {
  Container,
  AddButton,
  SheetContainer,
  SheetButton,
  Image,
  sheetStyles,
} from './styles';
import {HeaderNavigationProps} from './types';

export const Header: React.FC = () => {
  const navigation = useNavigation<HeaderNavigationProps>();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const {user} = useUserStore();

  const snapPoints = useMemo(() => ['25%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const hideModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const goToTransactionScreen = (type: TransactionTypes) => {
    navigation.navigate(RouteNames.transaction, {
      type,
    });
    hideModal();
  };

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.16}
      />
    ),
    [],
  );

  return (
    <Container>
      <Image source={user.photo} />
      <AddButton onPress={handlePresentModalPress}>
        <PlusIcon width={verticalScale(24)} height={verticalScale(24)} />
      </AddButton>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        enablePanDownToClose
        snapPoints={snapPoints}
        backgroundStyle={sheetStyles.sheetBackground}
        backdropComponent={renderBackdrop}>
        <SheetContainer>
          <SheetButton
            title="Add Income"
            backgroundColor={Colors.green[100]}
            onPress={() => goToTransactionScreen(TransactionTypes.income)}
          />
          <SheetButton
            title="Add Expense"
            backgroundColor={Colors.red[100]}
            onPress={() => goToTransactionScreen(TransactionTypes.expense)}
          />
        </SheetContainer>
      </BottomSheetModal>
    </Container>
  );
};
