const useLocalStorage = () => {
  const getItemFromLS = (key) => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : null;
  };

  const setItemInLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { getItemFromLS, setItemInLS };
};

export default useLocalStorage;
