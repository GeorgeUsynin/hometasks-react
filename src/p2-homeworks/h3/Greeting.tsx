import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    addUserOnKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserOnKeyPress} // деструктуризация пропсов
) => {

    const inputClass = error === "name is require" ? s.error : s.no_error

    return (
        <div className={s.wrapper}>
            <input value={name} onChange={setNameCallback} className={`${inputClass} ${s.input}`}
                   onKeyPress={addUserOnKeyPress}/>
            <button onClick={addUser}>add</button>
            <span>{`Total users: ${totalUsers}`}</span>
            <div className={s.error_message}>{error}</div>
        </div>
    )
}

export default Greeting
