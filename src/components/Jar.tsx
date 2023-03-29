/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import PortalGate from './PortalGate';
export default () => (
  <View style={{margin: 20, padding: 20, backgroundColor: 'blue'}}>
    <Text style={{width: 200}}>JAR Component</Text>
    <PortalGate gateName={'jar'} />
  </View>
);
