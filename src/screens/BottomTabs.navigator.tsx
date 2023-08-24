import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabsParamList } from '~src/types';
import { ClosetTabNavigator } from './ClosetTab.navigator';
import { CalendarTab } from './CalendarTab.screen';
import { CalendarMonthIcon, WardrobeIcon } from '~src/components/Icons';
import { theme } from '~src/theme';

// TODO: calendar-badge (?) @ https://pictogrammers.com/library/mdi/icon/calendar-badge/

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route: _ }) => ({
        tabBarActiveTintColor: theme.colorPurple50,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
      })}
      initialRouteName="ClosetTab"
      backBehavior="history">
      <BottomTabs.Screen
        name="ClosetTab"
        component={ClosetTabNavigator}
        options={{
          title: 'Closet',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <WardrobeIcon color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CalendarTab"
        component={CalendarTab}
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <CalendarMonthIcon color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
