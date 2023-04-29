const Storage = {
    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    get(key) {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : undefined;
    }
}

export default Storage;