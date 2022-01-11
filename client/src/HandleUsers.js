import Login from "./Login"
import SignUp from "./SignUp"
import { useState, useEffect } from "react";

function HandleUsers({setUser}) {
    const [hasAccount,setHasAccount] = useState(false)
    if (hasAccount) {
        return (
        <Login setUser={setUser} setHasAccount={setHasAccount} hasAccount={hasAccount}/>)
    }
    else {
        return (
        <SignUp setUser={setUser} setHasAccount={setHasAccount} hasAccount={hasAccount}/> )

    }
}

export default HandleUsers