import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

export default function CardContent({ children }: PropsWithChildren) {
  return <View testID="CardContent-view">{children}</View>;
}
