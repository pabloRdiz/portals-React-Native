/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {PortalContext} from '../providers/PortalProvider';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  View,
} from 'react-native';
import PortalGate from './PortalGate';

const MyModal = ({visible}: {visible: boolean}) => {
  console.log('🚀 turbo-cl ~ file: Bag.tsx:16 ~ MyModal ~ visible:', visible);
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log(
      '🚀 turbo-cl ~ file: Bag.tsx:21 ~ useEffect ~ visible:',
      visible,
    );
    setShow(visible);
  }, [visible]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          console.log(
            '🚀 turbo-cl ~ file: Bag.tsx:27 ~ MyModal - onRequestClose ~ show:',
            show,
          );
          setShow(!show);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                console.log(
                  '🚀 turbo-cl ~ file: Bag.tsx:35 ~ MyModal ~ onPress -show:',
                  show,
                );
                setShow(!show);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default () => {
  return (
    <View>
      <PortalGate gateName={'bag'}>
        {teleportFN => (
          <TouchableOpacity
            style={{width: 200, height: 100, backgroundColor: 'green'}}
            onPress={() => teleportFN('jar', <MyModal visible={true} />)}>
            <Text style={{width: 200}}>BAG Component</Text>
            <Text style={{width: 200}}>LET THE MAGIC BEGIN</Text>
          </TouchableOpacity>
        )}
      </PortalGate>
    </View>
  );
};
