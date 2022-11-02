import PlaceForm from "../components/places/PlaceForm";
import {insertPlace} from "../utils/database";

const AddPlace = ({navigation}) => {
  const createPlaceHandler = async (place) => {
    await insertPlace(place)
    navigation.navigate("AllPlaces");
  };

  return (
    <PlaceForm onCreatePlace={createPlaceHandler}/>
  );
};

export default AddPlace;
