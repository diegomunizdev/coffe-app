import React from 'react';
import Typograph from '../Typograph';
import { View } from 'react-native';

type CardTitleProps = {
  title: string;
  subtitle?: string;
};

export default function CardTitle({ title, subtitle }: CardTitleProps) {
  return (
    <View>
      <Typograph text={title} style={{ fontSize: 20, fontWeight: 'bold' }} />
      {subtitle ? <Typograph text={subtitle} style={{ fontSize: 12, fontWeight: '300' }} /> : null}
    </View>
  );
}
