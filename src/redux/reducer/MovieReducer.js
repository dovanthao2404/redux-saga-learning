export const movieReducer = (state = { listMovie: [] }, action) => {
    switch (action.type) {
        case "GET_TASK":
            state.listMovie = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}