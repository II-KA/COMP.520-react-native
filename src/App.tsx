import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './screens/Root.navigator';
import { Provider } from 'react-redux';
import { store } from './redux';

export const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </Provider>
);
