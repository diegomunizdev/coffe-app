import { useTheme } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';

export default function CardFooter({ children, ...props }: PropsWithChildren & ViewProps) {
  const { dark } = useTheme();
  return (
    <View
      style={[
        {
          paddingTop: 10,
          borderTopWidth: 1,
          borderTopColor: dark ? '#808080' : '#d9d9d9',
        },
        props.style,
      ]}
    >
      {children}
    </View>
  );
}
