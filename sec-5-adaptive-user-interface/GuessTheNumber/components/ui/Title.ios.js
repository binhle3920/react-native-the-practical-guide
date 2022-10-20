import {Platform, StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

const TitleIos = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ios: 0, android: 2}),
    borderWidth: 0,
    borderColor: '#FFFFFF',
    padding: 12,
    maxWidth: '80%'
  }
})

export default TitleIos
