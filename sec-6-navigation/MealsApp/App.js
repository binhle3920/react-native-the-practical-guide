import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import Colors from "./src/utils/colors";
import MealDetailScreen from "./src/screens/MealDetailScreen";
import FavoriteMealScreen from "./src/screens/FavoriteMealScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.header },
          headerTintColor: Colors.white,
          sceneContainerStyle: { backgroundColor: Colors.background },
          drawerContentStyle: { backgroundColor: Colors.header },
          drawerInactiveTintColor: Colors.white,
          drawerActiveTintColor: Colors.header,
          drawerActiveBackgroundColor: Colors.subtitle
        }}>
      <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size}/>
      }}/>
      <Drawer.Screen
          name="FavoriteMeals"
          component={FavoriteMealScreen}
          options={{
            title: 'Favorite Meals',
            drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size}/>
          }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'roboto': require('./assets/fonts/RobotoMono-Regular.ttf'),
    'roboto-italic': require('./assets/fonts/RobotoMono-Italic.ttf'),
    'roboto-bold': require('./assets/fonts/RobotoMono-Bold.ttf')
  })

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <View style={styles.root} onLayout={onLayoutRootView}>
        <StatusBar barStyle="light-content" />

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="MealsCategories"
                screenOptions={{
                  headerStyle: { backgroundColor: Colors.header },
                  headerTintColor: Colors.white,
                  contentStyle: { backgroundColor: Colors.background }
                }}>

              <Stack.Screen
                  name="Drawer"
                  component={DrawerNavigator}
                  options={{
                    headerShown: false,
                  }}/>

              <Stack.Screen
                  name="MealsOverview"
                  component={MealsOverviewScreen}
              />
              <Stack.Screen
                  name="MealDetail"
                  component={MealDetailScreen}
              />
            </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});
