export const capitalize = str =>
    (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ');

export const getColor = (name, dom = document.documentElement) => {
    return getComputedStyle(dom).getPropertyValue(`--falcon-${name}`).trim();
};

export const getItemFromStore = (key, defaultValue, store = localStorage) => {
    try {
        return store.getItem(key) === null
            ? defaultValue
            : JSON.parse(store.getItem(key));
    } catch {
        return store.getItem(key) || defaultValue;
    }
};

export const setItemToStore = (key, payload, store = localStorage) =>
    store.setItem(key, payload);

export const isIterableArray = array => Array.isArray(array) && !!array.length;