export const useLocalStorage = () => {
  const getLocalStorage = (key) => {
    try {
      if (window && key) {
        return JSON.parse(localStorage.getItem(key))
      } else {
        return null;
      }
    } catch (err) {
      console.log("local stroage err ", err);
    }
  }

  const setLocalStorage = (key, data) => {
    try {
      if (window && data && key) {
        return localStorage(key, JSON.stringify(data))
      } else {
        return null;
      }
    } catch (err) {
      console.log("Local storage error ", err);
    }
  }

  return {
    getLocalStorage,
    setLocalStorage
  }
}