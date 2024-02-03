/**
 * See the icons in: https://icons.expo.fyi/Index
 * Filter by MaterialCommunityIcons
 */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { useLayoutContext } from '../../../application/contexts/layout/Layout.context';

type IconProps = {
  name: string;
  size: number;
};

export default function Icon({ name, size }: IconProps) {
  const { colorTheme } = useLayoutContext();

  return (
    <MaterialCommunityIcons
      name={name as never}
      size={size}
      color={colorTheme === 'dark' ? '#00e6e6' : '#0d3b66'}
    />
  );
}
