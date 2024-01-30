import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';

export default function VStack({ children, ...props }: PropsWithChildren & ViewProps) {
  return (
    <View
      {...props}
      style={[
        {
          flexDirection: 'column',
        },
        props.style,
      ]}
      testID='VStack-view'
    >
      {children}
    </View>
  );
}
