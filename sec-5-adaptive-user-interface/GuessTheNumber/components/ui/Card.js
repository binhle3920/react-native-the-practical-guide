import {Dimensions, StyleSheet, View} from "react-native";
import Colors from "../../constants/colors";

const Card = ({children}) => {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary500,
    // Shadow for Android only
    elevation: 4,
    // Shadow for iOS only
    shadowColor: Colors.primary800,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.5
  },
});

export default Card;
