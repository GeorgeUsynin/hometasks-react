import {initialPeopleType, PeopleType} from "../HW8";

type sortACUpType = ReturnType<typeof sortUpAC>
type sortACDownType = ReturnType<typeof sortDownAC>
type checkACType = ReturnType<typeof checkAC>

export type ACTypes = checkACType | sortACUpType | sortACDownType

export const homeWorkReducer = (state: initialPeopleType, action: ACTypes): initialPeopleType => {
        const copyState = state.map(p => ({...p}))
        switch (action.type) {
            case "sort":
                if (action.payload === 'up') {
                    return copyState.sort((a: PeopleType, b: PeopleType) => a.name > b.name ? 1 : -1)
                } else {
                    return copyState.sort((a: PeopleType, b: PeopleType) => a.name < b.name ? 1 : -1)
                }
            case "check":
                return copyState.filter(p => p.age > 18)
            default:
                return state
        }
    }
;

export const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
    } as const
}

export const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}

export const checkAC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}
