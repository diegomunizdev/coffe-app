import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, TextProps } from 'react-native';

type TypographProps = {
  text: string;
} & TextProps;

export default function Typograph(props: TypographProps) {
  const { colors } = useTheme();

  return (
    <Text {...props} style={[{ color: colors.text, fontSize: 16 }, props.style]}>
      {props.text}
    </Text>
  );
}
