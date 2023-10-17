import React, {useRef} from 'react';

import {AnimatedFlashList} from '@shopify/flash-list';
import {Animated} from 'react-native';

import {BaseButton} from 'atoms';
import {
  MoneyControlIllustration,
  PlanningIllustration,
  MoneyFlowIllustration,
} from 'icons';

import {RouteNames} from 'navigation/route-names';

import {ListItem, Pagination} from './components';
import {ButtonContainer, SafeAreaView, LoginButton, width} from './styles';
import {OnboardingScreenProps, SlideProps} from './types';

const slides = [
  {
    title: 'Gain total control of your money',
    subTitle: 'Become your own money manager and make every cent count',
    illustration: <MoneyControlIllustration />,
  },
  {
    title: 'Know where your money goes',
    subTitle:
      'Track your transaction easily, with categories and financial report',
    illustration: <PlanningIllustration />,
  },
  {
    title: 'Planning ahead',
    subTitle: 'Setup your budget for each category so you in control',
    illustration: <MoneyFlowIllustration />,
  },
];

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  navigation,
}) => {
  const _renderItem = ({item}: {item: SlideProps}) => <ListItem item={item} />;

  const _keyExtractor = (item: string, index: number) => `PHC-${item}-${index}`;

  const scrollX = useRef(new Animated.Value(0)).current;

  const goToSignUp = () => navigation.navigate(RouteNames.signUp);

  const goToLogin = () => navigation.navigate(RouteNames.login);

  return (
    <SafeAreaView>
      <AnimatedFlashList
        data={slides}
        decelerationRate="fast"
        snapToInterval={width}
        horizontal
        renderItem={_renderItem}
        pagingEnabled
        keyExtractor={_keyExtractor}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={width}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: true,
          },
        )}
      />
      <Pagination data={slides} scrollX={scrollX} />
      <ButtonContainer>
        <BaseButton title="Sign Up" onPress={goToSignUp} />
        <LoginButton
          title="Login"
          textStyle={{color: '#7F3DFF'}}
          onPress={goToLogin}
        />
      </ButtonContainer>
    </SafeAreaView>
  );
};
