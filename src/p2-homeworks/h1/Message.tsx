import React from 'react'
import {MessageDataType} from "./HW1";
import s from './Message.module.css'

function Message(props: MessageDataType) {
    return (
        <div className={s.message_wrapper}>
            <div>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.userName_text_time}>
                <div className={s.userName_text}>
                    <p>{props.name}</p>
                    <p>{props.message}</p>
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
