import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [hasElephant, setHasElephant] = useState(false);
  const [elephants, setElephants] = useState([]);
  const [stars, setStars] = useState(550);
  const [friends, setFriends] = useState(0);

  return (
    <AppContext.Provider
      value={{
        elephants,
        stars,
        friends,
        setElephants,
        setStars,
        setFriends,
        hasElephant,
        setHasElephant,
      }}>
      {children}
    </AppContext.Provider>
  );
};
