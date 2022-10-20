import {Text, View, Pressable, StyleSheet} from "react-native";

import Colors from "../../constants/colors";

const PrimaryButton = ({children, onPress}) => {
  return (
      <View style={styles.buttonOuterContainer}>
        <Pressable
          onPress={onPress}
          android_ripple={{color: Colors.primary600}}
          style={({pressed}) => pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer}>
              <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>

  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 26,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary700,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75,

  }
})

export default PrimaryButton;
