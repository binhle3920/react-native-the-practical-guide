import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";

import AllPlaces from "./src/screens/AllPlaces";
import AddPlace from "./src/screens/AddPlace";
import IconButton from "./src/components/ui/IconButton";
import {Colors} from "./src/constants/colors";
import Map from "./src/screens/Map";
import {useEffect, useState} from "react";
import {init} from "./src/utils/database";
import PlaceDetail from "./src/screens/PlaceDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    setDbInitialized(true);

    init()
      .then(() => {
        console.log("Initialized database");
        setDbInitialized(true);
      })
      .catch(error => console.log("Initializing db failed", error));
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700}
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: "Your Favorite Places",
              headerRight: ({tintColor}) =>
                <IconButton
                  icon="add"
                  color={tintColor}
                  size={24}
                  onPress={() => navigation.navigate("AddPlace")}
                />
            })}
          />

          <Stack.Screen name="AddPlace" component={AddPlace} options={{
              title: "Add a new Place"
            }}
          />

          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
