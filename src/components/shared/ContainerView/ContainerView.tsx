import React, { PropsWithChildren } from 'react';
import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native';

export default function ContainerView({ children, ...props }: PropsWithChildren & ScrollViewProps) {
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      paddingTop: 40,
    },
  });

  return (
    <ScrollView {...props} style={[props.style, styles.main]}>
      {children}
    </ScrollView>
  );
}
