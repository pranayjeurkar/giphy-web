export const getTheme = (theme) => {
    return (theme === "light") ? "dark" : "light";
}

export const debounce = (cb, delay) => {
    let timer;
    return (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb(e.target.value);
        }, delay);
    }
}