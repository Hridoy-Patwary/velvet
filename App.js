import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import Home from './UI/pages/Home';


// primary color: #e79062
// secondary color: #f6f6f6



const { width, height } = Dimensions.get('window');

export default function App() {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [visibility, setVisibility] = useState('all');

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2500,
      useNativeDriver: true
    }).start(({finished}) => {
      setVisibility('none');
    });
  }, [fadeAnim]);


  return (
    <View style={styles.container}>
      <Home widthHeight={{w: width, h: height}} />
      <Animated.View style={[styles.innerContainer, {opacity: fadeAnim, pointerEvents: visibility}]}>
        <Text style={styles.welcomeMsg}>Welcome to Velvet!</Text>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  welcomeMsg: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25
  },
  innerContainer: {
    position: 'absolute',
    backgroundColor: '#f6f6f6',
    width: width,
    height: height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
