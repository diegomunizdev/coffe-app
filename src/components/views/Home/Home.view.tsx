import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useLayoutContext } from '../../../contexts/layout/Layout.context';
import Typograph from '../../shared/Typograph';
import Button from '../../shared/Button';
import Card from '../../shared/Card';

export default function HomeView() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const { colorTheme, handleColorTheme } = useLayoutContext();

  return (
    <View testID="HomeView-view" style={styles.container}>
      <StatusBar style="auto" />
      <Card.Root>
        <Card.Title title="Card title" subtitle="card subtitle"></Card.Title>
        <Card.Content>
          <Typograph text="Testando" />
        </Card.Content>
        <Card.Footer
          style={{
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Button
            onPress={() => {
              if (colorTheme === 'light') {
                handleColorTheme('dark');
              } else if (colorTheme === 'dark') {
                handleColorTheme('light');
              }
            }}
            title="button"
            variant="outline"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => {
              if (colorTheme === 'light') {
                handleColorTheme('dark');
              } else if (colorTheme === 'dark') {
                handleColorTheme('light');
              }
            }}
            title="button"
            variant="solid"
            accessibilityLabel="Learn more about this purple button"
          />
        </Card.Footer>
      </Card.Root>
    </View>
  );
}
