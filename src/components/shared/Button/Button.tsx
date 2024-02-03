import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  title: string;
  variant: 'solid' | 'outline';
} & TouchableOpacityProps;

export default function Button(props: ButtonProps) {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    touchableOpacity: {
      paddingVertical: 14,
      paddingHorizontal: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    solid: {
      backgroundColor: colors.primary,
      borderRadius: 8,
    },
    outline: {
      borderColor: colors.primary,
      borderRadius: 8,
      borderWidth: 1,
    },
    text: {
      textTransform: 'uppercase',
    },
    textSolid: {
      color: '#ffffff',
    },
    textOutline: {
      color: colors.primary,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.touchableOpacity, props.variant === 'outline' ? styles.outline : styles.solid]}
      {...props}
    >
      <Text
        style={[styles.text, props.variant === 'outline' ? styles.textOutline : styles.textSolid]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
