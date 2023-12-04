import React from "react";


function Input({name, type, value, eventHandler}){

    return (
        <>
            <label htmlFor={name}>
                {name}</label>
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={(e) => eventHandler(e)}
                />
        </>
    )

}

export default Input;