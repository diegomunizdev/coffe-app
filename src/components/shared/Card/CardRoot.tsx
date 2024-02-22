import { useTheme } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react';

import { StyleSheet, View } from 'react-native';

export default function CardRoot({ children }: PropsWithChildren) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: colors.card,
      borderRadius: 8,
      gap: 15,
    },
  });

  return (
    <View style={styles.container} testID="CardRoot-view">
      {children}
    </View>
  );
}
