enum ACTION_TYPES {
    SET_PRELOADER = 'SET_PRELOADER'
}

type InitStateType = {
    isLoading: boolean
}

type ActionsType = ReturnType<typeof loadingAC>


const initState: InitStateType = {
    isLoading: false
};

export const loadingReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case ACTION_TYPES.SET_PRELOADER: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state;
    }
};

export const loadingAC = (isLoading: boolean) => {
    return {
        type: ACTION_TYPES.SET_PRELOADER,
        isLoading
    } as const
};