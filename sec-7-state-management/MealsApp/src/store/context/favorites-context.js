import React from "react";
import {createContext} from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});

const FavoritesContextProvider = ({children}) => {
  const [favoritesMealIds, setFavoritesMealIds] = React.useState([]);

  const addFavorite = (id) => {
    setFavoritesMealIds((prevState) => [id, ...prevState]);
  }

  const removeFavorite = (id) => {
    setFavoritesMealIds((prevState) => prevState.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoritesMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;
