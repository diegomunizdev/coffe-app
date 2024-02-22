import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Typograph from '../../../shared/Typograph';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLayoutContext } from '../../../../application/contexts/layout/Layout.context';
import { useNavigation } from '@react-navigation/native';

export default function HomeTemplate() {
  const { navigate } = useNavigation();
  const { colorTheme, handleColorTheme } = useLayoutContext();

  return (
    <View testID="HomeTemplate-view">
      <Typograph text="Home template" />

      <TouchableOpacity onPress={handleColorTheme}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color={colorTheme === 'dark' ? '#00e6e6' : '#0d3b66'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('settings' as never)}>
        <MaterialCommunityIcons
          name="cog-outline"
          size={24}
          color={colorTheme === 'dark' ? '#00e6e6' : '#0d3b66'}
        />
      </TouchableOpacity>
    </View>
  );
}
