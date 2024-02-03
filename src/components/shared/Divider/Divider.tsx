import React from 'react';
import { View } from 'react-native';
import { useLayoutContext } from '../../../application/contexts/layout/Layout.context';

export default function Divider() {
  const { colorTheme } = useLayoutContext();
  return (
    <View
      style={{ borderTopWidth: 1, borderColor: colorTheme === 'dark' ? '#4d4d4d' : '#d9d9d9' }}
    />
  );
}
