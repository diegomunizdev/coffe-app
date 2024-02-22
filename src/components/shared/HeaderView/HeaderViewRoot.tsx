import React from 'react';
import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

export default function HeaderViewRoot({ children }: PropsWithChildren) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginVertical: 15,
    },
  });

  return <View style={styles.container}>{children}</View>;
}
