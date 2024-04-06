import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { getItemFromLS, setItemInLS } = useLocalStorage();

  const [searchResults, setSearchResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');

  const [loggedInUser, setLoggedInUser] = useState(
    getItemFromLS('loggedInUser')
  );
  const [registeredUsers, setRegisteredUsers] = useState(
    getItemFromLS('registeredUsers') || []
  );
  const [watchLists, setWatchLists] = useState([]);

  useEffect(() => {
    fetchWatchLists(loggedInUser);
  }, []);

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
    fetchWatchLists(email);
    toast.success(`You're logged in!`);
  };

  const logout = () => {
    setItemInLS('loggedInUser', null);
    setLoggedInUser(null);
    setWatchLists([]);
    setCurrentPage(1);
    setSearchResults([]);
    setQuery('');
    setTotalResults(0);
    toast.info(`You're logged out!`);
  };

  const fetchWatchLists = (email) => {
    setWatchLists(getItemFromLS(`watchLists-${email}`) || []);
  };

  const addMovieToWatchLists = (movie) => {
    if (!loggedInUser) {
      toast.info('Please login to add in the watchlists');
      return;
    }

    const existingMovie = watchLists?.find(
      (item) => item.imdbID === movie.imdbID
    );

    if (existingMovie) return;

    const updatedWatchLists = [...watchLists, movie];

    setItemInLS(`watchLists-${loggedInUser}`, updatedWatchLists);
    setWatchLists(updatedWatchLists);
    toast.success('Added to Watchlists');
  };

  const removeMovieFromWatchLists = (imdbID) => {
    if (!watchLists) return;

    const myList = [...watchLists];

    const index = myList.findIndex((movie) => movie?.imdbID === imdbID);

    if (index !== -1) {
      myList.splice(index, 1);
      setItemInLS(`watchLists-${loggedInUser}`, myList);
      setWatchLists(myList);
      toast.info('Removed from Watchlists');
    }
  };

  const addSearchResults = (res) => {
    setSearchResults(res);
  };

  return (
    <AppContext.Provider
      value={{
        loggedInUser,
        registeredUsers,
        watchLists,
        searchResults,
        totalResults,
        currentPage,
        query,
        handleUserAuthentication,
        logout,
        addMovieToWatchLists,
        removeMovieFromWatchLists,
        addSearchResults,
        setTotalResults,
        setCurrentPage,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
