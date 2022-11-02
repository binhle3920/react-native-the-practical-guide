import {Alert, Image, StyleSheet, Text, View} from "react-native";
import {launchCameraAsync, useCameraPermissions} from "expo-image-picker";
import {useState} from "react";

import {Colors} from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";
import {verifyPermission} from "../../utils/permission";

const ImagePicker = ({onTakeImage}) => {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission(
      cameraPermissionInformation.status,
      requestPermission,
      "camera"
    );

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.uri);
    onTakeImage(image.uri);
  }

  let imagePreview = <Text style={styles.fallbackText}>No image taken yet.</Text>;
  if (pickedImage) {
    imagePreview = <Image source={{uri: pickedImage}} style={styles.image}/>;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    borderColor: Colors.primary500,
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4
  },
  fallbackText: {
    fontStyle: "italic"
  }
})
