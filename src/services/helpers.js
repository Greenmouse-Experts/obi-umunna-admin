export const getLocalToken = (key) => {
    if (typeof window !== "undefined") {
        const storageItem = window.localStorage.getItem(key);
        if (storageItem) return (storageItem);
        return null;
      }
      return null;
}
export const formatString = (string, number) => {
  if (string.length > number - 2) {
    return string.substring(0, number).concat("...");
  } else return string;
};