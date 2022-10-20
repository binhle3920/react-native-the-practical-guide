import {Platform, StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    padding: 12,
    maxWidth: '80%'
  }
})

export default Title
