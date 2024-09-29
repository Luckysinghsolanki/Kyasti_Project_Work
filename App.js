import React from 'react';
import { View,StyleSheet } from 'react-native';
import ExpoPushNotification from './Components/ExpoPushNotification';

const App = () => {
  return (
    <View style={styles.container}>
     <ExpoPushNotification/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cce3ed',
  },
});

export default App;