import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import NetInfo from "@react-native-community/netinfo";
import RetryScreen from './screens/RetryScreen';




function App() {
  const [isConnected, setIsConnected] = useState(true);


  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        setIsConnected(true);
      }
      else {
        setIsConnected(false);
      }
    })
  })



  const Spinner = () => (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color='#fff' />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ height: '100%', width: '100%' }}>
        {isConnected ? <WebView source={{ uri: 'https://www.hellopatna.com/' }}
          startInLoadingState={true}
          style={{ height: '100%', width: '100%' }}
          renderLoading={Spinner}
          scalesPageToFit
          javaScriptEnabled={true}
          domStorageEnabled={true}
          renderError={() => setIsConnected(false)}
        />
          :
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          }}>
            <Text>Something went wrong</Text>
            <Button title="Retry" onPress={() => setIsConnected(true)} />
          </View>
        }
      </View>
    </View >
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    height: '100%',
    width: '100%'
  }
});
