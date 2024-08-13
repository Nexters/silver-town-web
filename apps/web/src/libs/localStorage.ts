const LocalStorage = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  set: (key: string, value: any) => {
    if (typeof window === "undefined") return;

    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (e) {
      console.error("LocalStorage set error:", e);
    }
  },

  get: (key: string) => {
    if (typeof window === "undefined") return null;

    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) return null;
      return JSON.parse(serializedValue);
    } catch (e) {
      console.error("LocalStorage get error:", e);
      return null;
    }
  },

  remove: (key: string) => {
    if (typeof window === "undefined") return;

    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error("LocalStorage remove error:", e);
    }
  },

  clear: () => {
    if (typeof window === "undefined") return;

    try {
      localStorage.clear();
    } catch (e) {
      console.error("LocalStorage clear error:", e);
    }
  },
};

export default LocalStorage;
