import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import calendarmanager from 'calendarmanager';

const App = () => {
  useEffect(() => {
    calendarmanager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
  }, []);

  return <SafeAreaView />;
};

export default App;
