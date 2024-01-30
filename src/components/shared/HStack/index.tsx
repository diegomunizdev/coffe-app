import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';

export default function HStack({ children, ...props }: PropsWithChildren & ViewProps) {
  return (
    <View
      {...props}
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
        props.style,
      ]}
      testID='HStack-view'
    >
      {children}
    </View>
  );
}
