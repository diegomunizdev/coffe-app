import React from 'react';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

export default function HeaderRight({ children }: PropsWithChildren) {
  return <View>{children}</View>;
}
