import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useLayoutContext } from '../../../contexts/layout/Layout.context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeView() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const { colorTheme, handleColorTheme } = useLayoutContext();

  return (
    <View testID="HomeView-view" style={styles.container}>
      <StatusBar style="auto" />
      <MaterialCommunityIcons na />
    </View>
  );
}
