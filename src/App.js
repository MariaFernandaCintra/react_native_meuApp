import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Cadastro from './screens/Cadastro';

export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro></Cadastro>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#F2B7DB"
  },
  box1:{
    width: 50,
    height: 50,
    backgroundColor: "pink"
  }, box2:{
    width: 50,
    height: 50,
    backgroundColor: "blue"
  }, box3:{
    width: 50,
    height: 50,
    backgroundColor: "purple"
  }, box4:{
    width: 50,
    height: 50,
    backgroundColor: "red"
  }, row:{
    flexDirection:"row"
  },text:{
    fontSize:28,
    fontWeight: 'bold'
  }, input:{
    borderWidth:1,
    borderColor:'gray',
    width:'80%',
    padding:10,
    marginVertical:10,
  }


});
