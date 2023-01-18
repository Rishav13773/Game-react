export const ADD = (game) => {
    return {
        type: "ADD_GAME",
        payload: game
    }
}


export const DARK = (dm) => {
    return {
        type: "DARK_MODE",
        payload: dm
    }
}