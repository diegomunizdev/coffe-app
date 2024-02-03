import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Typograph from '../../../shared/Typograph';
import { useLayoutContext } from '../../../../application/contexts/layout/Layout.context';
import HeaderView from '../../../shared/HeaderView';

export default function HeaderSettingsOrganism() {
  const { goBack } = useNavigation();
  const { colorTheme } = useLayoutContext();
  return (
    <HeaderView.Root>
      <HeaderView.Left>
        <TouchableOpacity onPress={goBack}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={24}
            color={colorTheme === 'dark' ? '#00e6e6' : '#0d3b66'}
          />
        </TouchableOpacity>
      </HeaderView.Left>
      <HeaderView.Center>
        <Typograph text="Configurações" />
      </HeaderView.Center>
      <HeaderView.Right>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color={colorTheme === 'dark' ? '#00e6e6' : '#0d3b66'}
          />
        </TouchableOpacity>
      </HeaderView.Right>
    </HeaderView.Root>
  );
}
