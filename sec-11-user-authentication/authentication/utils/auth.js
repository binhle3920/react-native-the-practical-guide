import axios from "axios";

const API_KEY = "AIzaSyArXVJ36USzfBT334u38VhLDCsk8pFJQ50";

export const createUser = (email, password) => {
  return authenticate('signUp', email, password);
}

export const login = (email, password) => {
  return authenticate('signInWithPassword', email, password);
}


const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true
  })

  return response.data.idToken;
}
