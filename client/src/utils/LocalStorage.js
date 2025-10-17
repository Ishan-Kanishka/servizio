const store = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
const retrieve = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}
const remove = (key) => {
    localStorage.removeItem(key);
}
export { store, retrieve, remove };