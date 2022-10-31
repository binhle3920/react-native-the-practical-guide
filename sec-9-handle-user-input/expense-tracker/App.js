import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {Provider} from "react-redux";

import ManageExpense from "./src/screens/ManageExpense";
import AllExpenses from "./src/screens/AllExpenses";
import RecentExpenses from "./src/screens/RecentExpenses";
import {GlobalStyles} from "./src/constants/styles";
import IconButton from "./src/components/common/IconButton";
import {store} from "./src/store/store";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: GlobalStyles.colors.white,
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) =>
            <IconButton
                name="add"
                size={24}
                color={tintColor}
                onPress={() => {
                  navigation.navigate('ManageExpense')
                }}
            />
      })}
    >
      <BottomTabs.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({color, size}) => <Ionicons name="hourglass" size={size} color={color}/>
          }} />
      <BottomTabs.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: 'All Expenses',
            tabBarLabel: 'All Expenses',
            tabBarIcon: ({color, size}) => <Ionicons name="calendar" size={size} color={color}/>
          }}/>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor: GlobalStyles.colors.white
            }}
          >
            <Stack.Screen
                name="ExpensesOverview"
                component={ExpensesOverview}
                options={{
                  headerShown: false
                }}
            />
            <Stack.Screen
                name="ManageExpense"
                component={ManageExpense}
                options={{
                  presentation: "modal"
                }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
