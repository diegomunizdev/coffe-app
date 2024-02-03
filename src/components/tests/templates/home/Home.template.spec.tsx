import React from 'react';
import { render } from '@testing-library/react-native';
import HomeTemplate from '../../../main/templates/home/Home.template';

const setup = () => render(<HomeTemplate />);

describe('Given <HomeTemplate/>', () => {
  describe('When the component is rendered', () => {
    it('Then a view should appear', () => {
      const { getByTestId } = setup();
      getByTestId('HomeTemplate-view');
    });
  });
});
