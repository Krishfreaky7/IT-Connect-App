// import Storedetails from '../Screens/StoreDetails';
import Add from '../Screens/Storereport';
import Home from '../Screens/Home/Home';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Storereport from '../Screens/Storereport';

const SettingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings!</Text>
  </View>
  )
}

const Bottom = createBottomTabNavigator();

const BottomNavigator =({navigation}) => {
  return (
    
    <Bottom.Navigator>
      <Bottom.Screen name="StoreReport" component={Storereport} />
      <Bottom.Screen name="Settings" component={SettingScreen} />
    </Bottom.Navigator>
  )
}

export default BottomNavigator;