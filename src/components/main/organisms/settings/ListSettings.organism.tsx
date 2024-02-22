import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';

import { useLayoutContext } from '../../../../application/contexts/layout/Layout.context';
import Typograph from '../../../shared/Typograph';
import Divider from '../../../shared/Divider/Divider';
import Icon from '../../../shared/Icon/Icon';
import Button from '../../../shared/Button/Button';

export default function ListSettings() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { colorTheme, handleColorTheme } = useLayoutContext();

  const styles = StyleSheet.create({
    modalView: {
      flex: 1,
      backgroundColor: colorTheme === 'dark' ? '#404040' : '#ffffff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
  });

  const listSettings = [
    {
      id: 1,
      iconName: 'account-circle-outline',
      title: 'Informações da conta',
      subtitle: 'Perfil, dados de acesso.',
      onClick: () => {},
    },
    {
      id: 2,
      iconName: 'theme-light-dark',
      title: 'Aparência',
      subtitle: 'Escuro ou claro.',
      onClick: () => setModalVisible(!modalVisible),
    },
    {
      id: 3,
      iconName: 'translate',
      title: 'Idioma',
      subtitle: 'Português e inglês.',
      onClick: () => {},
    },
  ];

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={{ padding: 20, marginTop: 20, gap: 20 }}>
            <Typograph text="Selecione a aparência de sua preferência." />
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                handleColorTheme();
              }}
            >
              <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                <Icon name={colorTheme === 'light' ? 'circle' : 'circle-outline'} size={24} />
                <Typograph text="Claro" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                handleColorTheme();
              }}
            >
              <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                <Icon name={colorTheme === 'dark' ? 'circle' : 'circle-outline'} size={24} />
                <Typograph text="Escuro" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1 }}>
        {listSettings.map((el, i) => (
          <View key={i}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Icon name={el.iconName as never} size={24} />
              <View style={{ marginHorizontal: 15, flex: 2 }}>
                <Typograph text={el.title} />
                <Typograph text={el.subtitle} style={{ fontSize: 12 }} />
              </View>
              <TouchableOpacity onPress={el.onClick}>
                <Icon name="chevron-right" size={24} />
              </TouchableOpacity>
            </View>
            <Divider />
          </View>
        ))}
      </View>
      <View style={{ padding: 20, marginTop: 20 }}>
        <Button title="Sair do aplicativo" variant="outline" />
      </View>
    </>
  );
}
