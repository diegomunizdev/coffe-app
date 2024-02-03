import React from 'react';
import SettingsTemplate from '../../templates/settings/Settings.template';
import ContainerView from '../../../shared/ContainerView/ContainerView';

export default function SettingsView() {
  return (
    <ContainerView testID="SettingsView-view">
      <SettingsTemplate />
    </ContainerView>
  );
}
