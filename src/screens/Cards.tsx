import { StyleSheet, Text, View } from 'react-native';

export default function Cards() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    color: '#000000',
    fontWeight: 'bold',
  }
});
