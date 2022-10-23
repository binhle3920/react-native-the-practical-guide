import {StyleSheet, Text, View} from "react-native";
import Colors from "../../utils/colors";

const MealSubtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default MealSubtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.subtitle,
    fontSize: 18,
    fontFamily: 'roboto-bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    borderBottomColor: Colors.subtitle,
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4
  }
})
