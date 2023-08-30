import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ClosetTabRootPage } from './ClosetTabRootPage.screen';
import { ClosetTabCategoryPage } from './ClosetTabCategoryPage.screen';
import { ClosetStackParamList } from '~src/types';
import { theme } from '~src/theme';
import { BackIcon } from 'assets/Icons';

const ClosetStack = createStackNavigator<ClosetStackParamList>();

export const ClosetTabNavigator: React.FC = () => {
  return (
    <ClosetStack.Navigator
      initialRouteName="RootPage"
      //detachInactiveScreens={false}
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
        name="RootPage"
        component={ClosetTabRootPage}
        options={{ title: 'Closet' }}
      />
      <ClosetStack.Screen
        name="CategoryPage"
        component={ClosetTabCategoryPage}
        options={({ route }) => ({ title: route.params.name })}
      />
    </ClosetStack.Navigator>
  );
};
