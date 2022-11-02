import PlacesList from "../components/places/PlacesList";
import {useEffect, useState} from "react";
import {useIsFocused} from "@react-navigation/native";
import {fetchPlaces} from "../utils/database";

const AllPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocus = useIsFocused();

  useEffect(() => {
    const loadPlaces = async () => {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocus) {
      loadPlaces();
    }
  }, [isFocus]);

  return <PlacesList places={loadedPlaces} />
};

export default AllPlaces;
