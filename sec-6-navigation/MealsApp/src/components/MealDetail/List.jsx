import {StyleSheet, View, Text} from "react-native";
import Colors from "../../utils/colors";

const List = ({ data }) => {
  return data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 6,
    backgroundColor: Colors.subtitle
  },
  itemText: {
    color: Colors.background
  }
});
