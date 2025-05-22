import { useRouteError } from "react-router";

const Error = () =>{
    const error = useRouteError()
    console.log(error)

    
    return (
        <>
            <h1>Oops!! Something went wrong.. 🥺</h1>
            <h3>{error.status}</h3>
        </>
    )
}

export default Error;