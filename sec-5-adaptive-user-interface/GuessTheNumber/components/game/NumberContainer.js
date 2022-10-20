import {StyleSheet, Text, View, Dimensions} from "react-native";

import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.number}>{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontFamily: 'open-sans-bold',
    color: Colors.secondary500,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
})

export default NumberContainer;
