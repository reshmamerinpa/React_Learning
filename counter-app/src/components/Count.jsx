import { useState } from "react";

function Counter(){
    const [count ,setCount] =useState(0);
    // const increment = () =>{
    //     setCount(count+1)
    // }
    return(
        <>
        <div className="count">
            <h1>{count}</h1>
            <div className="counter-button">
                <button className="increase" onClick={() => {
                    if (count < 100) setCount(count + 1);
                }}>Increment</button>
                <button className="decrease" onClick={() => {
                    if (count > 0) setCount(count - 1);
                }}>Decrement</button>
            </div>
        </div>
        </>
    )
}
export default Counter;