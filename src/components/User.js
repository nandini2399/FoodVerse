import { useState } from "react";
const User = (props) =>{
    const [count,setCount] = useState(0)
    return (
        <div className="user-card">
            <h2>{count}</h2>
            <h2>Name : {props.name}</h2>
            <h3>City : Noida</h3>
        </div>
    )
}

export default User;