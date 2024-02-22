import React from 'react';
import { render } from '@testing-library/react-native';
import HomeView from '../../../main/views/home/Home.view';

const setup = () => render(<HomeView />);

describe('Given <HomeView/>', () => {
  describe('When the component is rendered', () => {
    it('Then a view should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HomeView-view');
    });
  });
});
