import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./store/store";
import IconButton from "./components/ui/IconButton";
import {authenticate, logout} from "./store/user";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const dispatch = useDispatch();

  const userLogout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(logout({}));
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({tintColor}) =>
              <IconButton icon="exit" color={tintColor} size={24} onPress={userLogout} />
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      setIsTryingLogin(true);
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        dispatch(authenticate({token: storedToken}));
      }

      setIsTryingLogin(false);
    };

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      { !isAuthenticated && <AuthStack /> }
      { isAuthenticated && <AuthenticatedStack /> }
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
