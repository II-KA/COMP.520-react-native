import React, { FC } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { ClosetCategory } from '~src/types';
import { AppText } from './AppText';
import { useClosetNavigation } from '~src/hooks/useTypedNavigation';
import { theme } from '~src/theme';

export const ClosetCategories: FC<{ categories: ClosetCategory[] }> = ({
  categories,
}) => {
  const homeNavigation = useClosetNavigation();
  return (
    <View style={styles.container}>
      {categories.map(category => (
        <View key={category.name}>
          <Pressable
            onPress={() => homeNavigation.push('CategoryPage', category)}
            style={({ pressed }) => [
              styles.button,
              ...(pressed ? [styles.pressedButton] : []),
            ]}
            android_disableSound={true}>
            {({ pressed }) => <AppText size={12}>{category.name}</AppText>}
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    //flexWrap: 'wrap',
    //justifyContent: 'flex-start',
    //alignItems: 'stretch',
    alignContent: 'stretch',
    margin: 15,
  },
  button: {
    //flexGrow: 1,
    padding: 20,
    //borderWidth: 4,
    //borderStyle: 'solid',
    //borderColor: theme.colorPurple50,
    backgroundColor: theme.colorBlack10,
    borderRadius: 10,
  },
  pressedButton: {
    backgroundColor: theme.colorGrey,
  },
});
