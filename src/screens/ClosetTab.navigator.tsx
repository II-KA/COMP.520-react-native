import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ClosetTabRootCategories } from './ClosetTabRootCategories.screen';
import { ClosetTabSecondPage } from './ClosetTabSecondPage.screen';
import { ClosetStackParamList } from '~src/types';

const ClosetStack = createStackNavigator<ClosetStackParamList>();

export const ClosetTabNavigator: React.FC = () => {
  return (
    <ClosetStack.Navigator initialRouteName="FirstPage">
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
