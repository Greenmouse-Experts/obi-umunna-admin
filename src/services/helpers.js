export const getLocalToken = (key) => {
    if (typeof window !== "undefined") {
        const storageItem = window.localStorage.getItem(key);
        if (storageItem) return (storageItem);
        return null;
      }
      return null;
}