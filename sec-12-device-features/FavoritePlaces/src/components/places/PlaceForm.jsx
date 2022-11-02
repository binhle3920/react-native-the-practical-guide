import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useCallback, useState} from "react";

import {Colors} from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../ui/Button";
import {Place} from "../../models/place";

const PlaceForm = ({onCreatePlace}) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  const changeTitleHandler = (enteredText) => {
    setTitle(enteredText);
  }

  const onTakeImage = useCallback((imageUri) => {
    setImage(imageUri);
  }, []);

  const onLocationPicked = useCallback((location) => {
    setLocation(location);
  }, []);

  const savePlaceHandler = () => {
    const placeData = new Place(
      title,
      image,
      "Place holder Address",
      location
    );

    onCreatePlace(placeData);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={title}
          style={styles.input}
        />
      </View>

      <ImagePicker onTakeImage={onTakeImage} />
      <LocationPicker onLocationPicked={onLocationPicked}/>

      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100
  }
});
