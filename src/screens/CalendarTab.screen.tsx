import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText } from '~src/components/AppText';

export const CalendarTab: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppText size={16}>TODO: Calendar view</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
