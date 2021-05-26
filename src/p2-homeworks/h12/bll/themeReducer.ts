const CHANGE_THEME = 'CHANGE_THEME'

export type InitStateThemeType = {
    theme: string
}

const initState = {
    theme: 'some'
};

type changeThemeCType = ReturnType<typeof changeThemeC>

export const themeReducer = (state: InitStateThemeType = initState, action: changeThemeCType): InitStateThemeType => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.theme}
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string)  => {
    return{
        type: CHANGE_THEME,
        theme
    } as const
}