import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ClosetTabFirstPage } from './ClosetTabFirstPage.screen';
import { ClosetTabSecondPage } from './ClosetTabSecondPage.screen';
import { ClosetStackParamList } from '~src/types';

const ClosetStack = createStackNavigator<ClosetStackParamList>();

export const ClosetTabNavigator: React.FC = () => {
  return (
    <ClosetStack.Navigator initialRouteName="FirstPage">
      <ClosetStack.Screen name="FirstPage" component={ClosetTabFirstPage} />
      <ClosetStack.Screen name="SecondPage" component={ClosetTabSecondPage} />
    </ClosetStack.Navigator>
  );
};
