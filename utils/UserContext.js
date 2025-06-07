import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Nandini",
    mode: false
})

export default UserContext;