const INIT_STATE = {
    games: []
};

const DARK_STATE = {
    darks: false
};


export const gamereducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_GAME":
            return {
                games: [action.payload]
            }
        default:
            return state
    }
}

export const darkreducer = (state = DARK_STATE, action) => {
    switch (action.type) {
        case "DARK_MODE":
            return {
                darks: action.payload
            }
        default:
            return state;
    }
}



