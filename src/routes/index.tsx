import React from 'react';
import HomeView from '../components/views/Home/Home.view';
import { NavigationContainer, Theme } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import LayoutProvider from '../components/providers/layout/Layout.provider';
import { useLayoutContext } from '../contexts/layout/Layout.context';

const Stack = createNativeStackNavigator();

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#00e6e6',
    background: '#333333',
    card: '#595959',
    text: '#ffffff',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
  },
};

const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#0d3b66',
    background: 'rgb(242, 242, 242)',
    card: '#ffffff',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
  },
};

function Routes() {
  const { colorTheme } = useLayoutContext();

  const routes = [
    {
      name: 'home',
      component: HomeView,
      options: { headerShown: false } as NativeStackNavigationOptions,
    },
  ];

  return (
    <NavigationContainer theme={colorTheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack.Navigator>
        {routes.map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// eslint-disable-next-line react/display-name
export default () => (
  <LayoutProvider>
    <Routes />
  </LayoutProvider>
);
