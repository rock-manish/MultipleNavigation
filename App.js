import * as React from 'react';
import { Text, View,Image, Settings, Touchable, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { createStackNavigator } from '@react-navigation/stack';

function CustomHeader({title}){
  return(
    <View style={{flexDirection:'row',height:50}}>
      <View style={{flex:1,justifyContent:"center"}}>
        <Image 
        style={{height:30,width:30,marginLeft:3}}
        source={require('./src/images/menu.png')} />
      </View>
      <View style={{flex:1.5,justifyContent:"center"}}>
      <Text style={{textAlign:"center"}}>{title}</Text>
      </View>
      
      <View style={{flex:1}}></View>

    </View>
  )
}

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home"/>
      <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      <Text>Home!</Text>
      <TouchableOpacity>
        <Text>Go Home Details!
          
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetails() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home Details"/>
      <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      <Text>Home Details</Text>
      </View>
    </SafeAreaView>
  );
}



function SettingsScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Settings"/>
      <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      <Text>Settings!</Text>
      <TouchableOpacity>
        <Text>Go Home Details!
          
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreenDetails() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Settings Details"/>
      <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
      <Text>Settings Details</Text>
      
      </View>
    </SafeAreaView>
  );
}

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeDetails" component={HomeScreenDetails} />
      
    </Stack.Navigator>
  );
}

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="HomeDetails" component={HomeScreenDetails} />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}