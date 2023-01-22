import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { RealmContext } from './models';
import colors from './styles/colors';
import { App } from './App';

export const AppWrapper = () => {
  const { RealmProvider } = RealmContext;

  return (
    <SafeAreaView style={styles.screen}>
      <RealmProvider>
        <App />
      </RealmProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
