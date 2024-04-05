import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { getItemFromLS, setItemInLS } = useLocalStorage();

  const [loggedInUser, setLoggedInUser] = useState(
    getItemFromLS('loggedInUser')
  );
  const [registeredUsers, setRegisteredUsers] = useState(
    getItemFromLS('registeredUsers') || []
  );

  const handleUserAuthentication = (email) => {
    if (!registeredUsers.includes(email)) {
      setRegisteredUsers((prev) => {
        setItemInLS('registeredUsers', [...prev, email]);
        return [...prev, email];
      });
    }

    login(email);
  };

  const login = (email) => {
    setItemInLS('loggedInUser', email);
    setLoggedInUser(email);
  };

  const logout = () => {
    setItemInLS('loggedInUser', null);
    setLoggedInUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        loggedInUser,
        registeredUsers,
        handleUserAuthentication,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
