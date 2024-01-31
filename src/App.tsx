import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { RootNavigator } from './screens/Root.navigator';
import { Provider } from 'react-redux';
import { persistor, store } from './redux';

export const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);
