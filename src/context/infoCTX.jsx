import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState('Viktor Kotov')
  const [hasElephant, setHasElephant] = useState(false);
  const [elephants, setElephants] = useState([]);
  const [stars, setStars] = useState(149);
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
        user, 
        setUser
      }}>
      {children}
    </AppContext.Provider>
  );
};
