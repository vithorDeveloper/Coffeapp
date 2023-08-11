import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Button from '../components/Button';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/blur-mobile.png')} style={styles.background}>
        <Text style={styles.title}>O café que fará seu código decolar para o próximo nível.</Text>

        <Button />

        <Text style={styles.textBrand}>Great Coffee</Text>

        <Image source={require('../../assets/brand.png')}/>
        <Image source={require('../../assets/Group.png')}/>
        <Image style={styles.assets} source={require('../../assets/PngItem.png')}/>
        <Image style={styles.assets2} source={require('../../assets/PngItem1.png')}/>

        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },

  title:{
    marginTop: 50,
    fontSize: 40,
    textAlign: 'center',
    color: '#bbb',
  },

  background:{
    flex: 1,
    alignItems: 'center',
  },

  textBrand:{
    fontSize: 60,
    color: '#bbb',
  },

  assets:{
    position: 'absolute',
    bottom: 30,
    left: 20,
  },

  assets2:{
    position: 'absolute',
    bottom: 30,
    right: 10,
  }
});
