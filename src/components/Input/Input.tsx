"use client"
import React from "react";
import cn from "classnames";
import styles from "./input.module.scss";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
    value?: string;
    onChange: (value: string) => void;
    className?: string;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
value = "",
onChange,
className,
disabled = false,
...attributes}) => {
    const [currentValue, setValue] = React.useState(value);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let target = event.target;
        setValue(target.value);
        onChange(target.value);
    };

    return (
        <input onInput={handleInput} 
            className={cn(styles.input,disabled && styles.input_disabled, className)}

            value={currentValue}
            {...attributes}
        />
    )
}

export default Input;