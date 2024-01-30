import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';

export default function Center({ children, ...props }: PropsWithChildren & ViewProps) {
  return (
    <View
      {...props}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
        props.style,
      ]}
    >
      {children}
    </View>
  );
}
