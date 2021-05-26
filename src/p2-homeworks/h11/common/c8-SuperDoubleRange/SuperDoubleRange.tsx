import React from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number | number[]) => void
    value: number | number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: any, newValue: number | number[]) => {
        onChangeRange(newValue);
    };

    return (
        <>
            <Slider
                style={{
                    width: '300px',
                    margin: '0 10px'
                }}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"

            />
        </>
    );
}

export default SuperDoubleRange;
