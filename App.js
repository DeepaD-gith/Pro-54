import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class App extends React.Component {
  showAlert(type) {
    alert(type);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnView}>
          <Button
            color="red"
            title="guitar"
            onPress={() => this.showAlert('guitar')}
          />
        </View>
        <View style={styles.btnView}>
          <Button color="blue" title="Violin" 
          onPress={() => this.showAlert('Violin')}/>
        </View>
        <View style={styles.btnView}>
          <Button color="purple" title="Jazz" 
          onPress={() => this.showAlert('Jazz')}/>
        </View>
        <View style={styles.btnView}>
          <Button color="gold" title="Piano" 
          onPress={() => this.showAlert('Piano')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  btnView: {
    width: '50%',
    justifyContent: 'center',
    margin: 8,
    alignSelf: 'Center',
    backgroundColor: '#00f',
    padding: 0,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
