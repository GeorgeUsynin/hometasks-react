import React from "react";
import preloader from './images/preloader.svg'

export const Preloader = React.memo(() => {
    return (
        <div>
            <img src={preloader} alt="preloader"/>
        </div>
    )
})