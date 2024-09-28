import { createContext } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  return <FavoriteContext.Provider>children</FavoriteContext.Provider>;
}

export default FavoriteContextProvider;
