export const getTheme = (theme) => {
    return (theme === "light") ? "dark" : "light";
}

export const debounce = (cb, delay) => {
    let timer;
    return (query) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb(query);
        }, delay);
    }
}