import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

function WelcomeScreen() {
  const [fetchedData, setFetchedData] = useState('');

  const userToken = useSelector(state => state.user.token);

  useEffect(() => {
    axios.get(
      `https://expense-tracker-a85ee-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=${userToken}`
    ).then((response) => {
      setFetchedData(response.data);
    });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text style={{marginTop: 20}}>{fetchedData}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
