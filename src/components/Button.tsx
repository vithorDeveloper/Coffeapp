import React from 'react';
import { CaretCircleRight } from 'phosphor-react-native';
import { View, Text, StyleSheet } from 'react-native';

export default function Button(){

  return(
    <View style={styles.button}>
        <Text style={styles.text}>PEGAR MEU CAFÉ</Text><CaretCircleRight color="#bbb"/>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    width: 200,
    marginVertical: 40,
    borderWidth: 1,
    borderColor: '#7e42f5',
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 10,
  },

  text: {
    color: '#bbb',
    fontSize: 15,
  }
})
