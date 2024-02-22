import React from 'react';
import HomeTemplate from '../../templates/home/Home.template';
import ContainerView from '../../../shared/ContainerView/ContainerView';

export default function HomeView() {
  return (
    <ContainerView testID="HomeView-view">
      <HomeTemplate />
    </ContainerView>
  );
}
