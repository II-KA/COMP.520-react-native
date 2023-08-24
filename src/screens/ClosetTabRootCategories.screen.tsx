import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { Greeting } from '~src/components/Greeting';
import {
  useClosetNavigation,
  useRootNavigation,
} from '~src/hooks/useTypedNavigation';
import { closetCategoriesSelector } from '~src/redux/closet/selectors';

export const ClosetTabRootCategories = () => {
  const categories = useSelector(closetCategoriesSelector);
  const homeNavigation = useClosetNavigation();
  const rootNavigation = useRootNavigation();
  return (
    <View style={styles.container}>
      <Greeting />
      <View style={styles.bottomSpace}>
        <Button
          title="Open Second Page"
          onPress={() => homeNavigation.navigate('SecondPage')}
        />
      </View>
      <Button
        title="Open Modal"
        onPress={() => rootNavigation.navigate('ExampleModal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSpace: {
    marginBottom: 10,
  },
});
