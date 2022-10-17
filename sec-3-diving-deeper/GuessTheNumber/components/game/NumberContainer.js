import {StyleSheet, Text, View} from "react-native";

import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.number}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: 24,
    margin: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontFamily: 'open-sans-bold',
    color: Colors.secondary500,
    fontSize: 36,
  },
})

export default NumberContainer;
