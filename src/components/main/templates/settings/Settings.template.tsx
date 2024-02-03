import React from 'react';
import { View } from 'react-native';
import HeaderSettingsOrganism from '../../organisms/settings/HeaderSettings.organism';
import ListSettings from '../../organisms/settings/ListSettings.organism';

export default function SettingsTemplate() {
  return (
    <View testID="HomeTemplate-view" style={{ flex: 1 }}>
      <HeaderSettingsOrganism />
      <ListSettings />
    </View>
  );
}
