import {useState} from "react";
import {Alert} from "react-native";
import {useDispatch} from "react-redux";

import AuthContent from '../components/Auth/AuthContent';
import {createUser} from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {authenticate} from "../store/user";

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const signUpHandler = async ({email, password}) => {
    setIsLoading(true);

    try {
      const token = await createUser(email, password);
      dispatch(authenticate({token: token}))
    } catch (error) {
      Alert.alert(
          "Authentication failed!",
          "Could not create user. Please check your credentials or try again later!"
      );
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay message="Creating user..." />
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
