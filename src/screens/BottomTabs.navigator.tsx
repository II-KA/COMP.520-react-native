import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabsParamList } from '~src/types';
import { ClosetTabNavigator } from './ClosetTab.navigator';
import { CalendarTab } from './CalendarTab.screen';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="ClosetTab"
        component={ClosetTabNavigator}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen name="CalendarTab" component={CalendarTab} />
    </BottomTabs.Navigator>
  );
};
