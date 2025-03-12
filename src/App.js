import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Home from './screens/HomeScreen';
import Evento from './screens/CadastroEventoScreen';
import Organizador from './screens/CadastroOrganizadorScreen';
import Ingresso from './screens/CadastroIngressoScreen';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Evento" component={Evento}/>
      <Stack.Screen name="Organizador" component={Organizador}/>
      <Stack.Screen name="Ingresso" component={Ingresso}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

