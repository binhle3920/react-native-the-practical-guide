import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons';

import Colors from "../utils/colors";

const IconButton = ({ iconName, size = 24, color = Colors.white, onPress }) => {
  return (
      <Pressable
          onPress={onPress}
          android_ripple={{color: Colors.light_gray}}
          style={({pressed}) => [pressed && styles.pressedButton]}>
        <Ionicons name={iconName} size={size} color={color}/>
      </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({
  pressedButton: {
    opacity: 0.5
  }
})
