import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value === " ") {
            setError('name is require')
        } else if (e.currentTarget.value !== " "){
            setError("")
            setName(e.currentTarget.value)
            }
    }

    const addUser = () => {
        if (name.length === 0) {
            setError('name is require')
        } else {
            addUserCallback(name)
            setError('')
            alert(`Hello ${name} !`)
            setName('')
        }

    }

    const addUserOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.key === "Enter" && name.length > 0) {
            addUserCallback(name)
            setError('')
            alert(`Hello ${name} !`)
            setName('')
        } else if (e.key === "Enter") {
            setError('name is require')
        }

        // (name.length === 0) ? setError('name is require') : addUserCallback(name)

    }


    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUserOnKeyPress={addUserOnKeyPress}
            error={error}
            addUser={addUser}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
