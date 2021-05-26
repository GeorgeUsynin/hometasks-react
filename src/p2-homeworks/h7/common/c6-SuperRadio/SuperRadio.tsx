import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: string[]
    onChangeOption: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption(e.currentTarget.value)
    }

    const mappedOptions = options ? options.map((opt, i) => {
        return (
            // map options with key
            <label key={i}>
                <input
                    type={"radio"}
                    onChange={onChangeCallback}
                    name={name}
                    value={opt}
                    checked={value === opt}
                    // name, checked, value, onChange
                />
                {opt}
            </label>

        )
    }) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
