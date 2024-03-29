import React from 'react';
import { Platform } from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { RootStackParamList } from '~src/types';
import { AddCategoryModal } from './AddCategoryModal.screen';
import { BottomTabsNavigator } from './BottomTabs.navigator';
import { StackNavigationOptions } from '@react-navigation/stack';
import { BackIcon } from 'assets/Icons';
import { theme } from '~src/theme';
import { AddItemModal } from './AddItemModal';

const RootStack = createStackNavigator<RootStackParamList>();

const modalScreenOptions: Partial<StackNavigationOptions> = {
  gestureDirection: 'vertical',
  gestureEnabled: true,
  cardOverlayEnabled: true,
  cardStyleInterpolator: Platform.select({
    ios: CardStyleInterpolators.forModalPresentationIOS,
    android: CardStyleInterpolators.forRevealFromBottomAndroid,
  }),
};

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={({ route: _ }) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: { fontFamily: theme.IBMPlexSans300, fontSize: 22 },
        headerStyle: { backgroundColor: theme.colorWhite },
        headerTintColor: theme.colorPurple90,
        headerBackImage: ({ tintColor }) => (
          <BackIcon color={tintColor} size={24} />
        ),
        gestureEnabled: false,
        animationEnabled: false,
      })}>
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabsNavigator}
        options={{
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
        }}
      />
      <RootStack.Screen
        name="AddCategoryModal"
        component={AddCategoryModal}
        options={{
          ...modalScreenOptions,
          title: 'Add Category',
          gestureEnabled: false,
          animationEnabled: false,
        }}
      />
      <RootStack.Screen
        name="AddItemModal"
        component={AddItemModal}
        options={{
          ...modalScreenOptions,
          title: 'Add Item',
          gestureEnabled: false,
          animationEnabled: false,
        }}
      />
    </RootStack.Navigator>
  );
};
