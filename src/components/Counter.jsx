
import React from "react";

function Counter({setFruitCount, fruitCount}) {


    return (
        <>
            <button
                type="button"
                onClick={() => setFruitCount(fruitCount ? fruitCount - 1 : 0)}
            >
                -
            </button>
            <p>{fruitCount}</p>
            <button
                type="button"
                onClick={() => setFruitCount(fruitCount + 1)}
            >
                +
            </button>
        </>
    );
}

export default Counter;