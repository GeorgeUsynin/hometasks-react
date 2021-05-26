import React from 'react'
import {AffairType} from "./HW2";
import cls from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const priorityColor = props.affair.priority === 'high' ? cls.high : props.affair.priority === 'middle' ? cls.middle : cls.low

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    return (
        <div className={cls.affair}>
            <div> {props.affair.name}</div>
            <div><span className={priorityColor}>{`[${props.affair.priority}]`}</span></div>
            <div>
                <button onClick={deleteCallback} className={cls.delete_button}>X</button>
            </div>


        </div>
    )
}

export default Affair
