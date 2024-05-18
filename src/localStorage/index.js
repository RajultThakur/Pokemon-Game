export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('pokemon-state', serializedState);
    } catch (err) {
        console.error("Could not save state to local storage:", err);
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('pokemon-state');
        const data = JSON.parse(serializedState);
        return data;
    } catch (err) {
        console.error("Could not load state from local storage:", err);
        return [];
    }
};

export const removeState = () => {
    localStorage.removeItem('pokemon-state');
    return [];
}
