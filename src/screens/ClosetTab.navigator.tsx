import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ClosetTabRootCategories } from './ClosetTabRootCategories.screen';
import { ClosetTabSecondPage } from './ClosetTabSecondPage.screen';
import { ClosetStackParamList } from '~src/types';
import { theme } from '~src/theme';
import { BackIcon } from 'assets/Icons';

const ClosetStack = createStackNavigator<ClosetStackParamList>();

export const ClosetTabNavigator: React.FC = () => {
  return (
    <ClosetStack.Navigator
      initialRouteName="FirstPage"
      screenOptions={({ route: _ }) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: { fontFamily: theme.IBMPlexSans300, fontSize: 22 },
        headerStyle: { backgroundColor: theme.colorWhite },
        headerTintColor: theme.colorPurple90,
        headerBackImage: ({ tintColor }) => (
          <BackIcon color={tintColor} size={24} />
        ),
      })}>
      <ClosetStack.Screen
        name="FirstPage"
        component={ClosetTabRootCategories}
        options={{ title: 'Closet' }}
      />
      <ClosetStack.Screen
        name="SecondPage"
        component={ClosetTabSecondPage}
        options={{ title: 'Closet' }}
      />
    </ClosetStack.Navigator>
  );
};
