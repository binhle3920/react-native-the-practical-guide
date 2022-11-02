import {PermissionStatus} from "expo-image-picker";
import {Alert} from "react-native";

export const verifyPermission = async (permissionStatus, requestPermission, permissionName) => {
  if (permissionStatus === PermissionStatus.UNDETERMINED) {
    const permissionResponse = await requestPermission();
    return permissionResponse.granted;
  }

  if (permissionStatus === PermissionStatus.DENIED) {
    Alert.alert(
      "Insufficient Permissions!",
      `You need to grant ${permissionName} permissions to use this app.`
    );
    return false;
  }

  return true;
}
