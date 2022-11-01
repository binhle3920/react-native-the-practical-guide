import AuthContent from '../components/Auth/AuthContent';
import {useState} from "react";
import {login} from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {useDispatch} from "react-redux";
import {authenticate} from "../store/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const loginHandler = async ({email, password}) => {
    setIsLoading(true);

    try {
      const token = await login(email, password);
      dispatch(authenticate({token: token}))
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay message="Logging you in..." />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
