import React, { useContext, useState } from "react"
import UserContext from "../context/UserContext"


const Login = ()=> {

    const [username, setUsername]= useState('')
    const [userpassword, setUserPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handlesumit = (e)=>{
        e.preventDefault()
        setUser({username, userpassword})

    }

    return(
        <div>
              <h1>Login</h1>
              <input 
              type="text" 
              placeholder="username"
              value={username}
              onChange={(e)=> setUsername(e.target.value) }
              />

              {" "}
              <input
               type="text" 
               placeholder="userpassword"
               value={userpassword}
               onChange={(e)=> setUserPassword(e.target.value) }/>

               <button onClick={handlesumit}>Submit</button>

        </div>
      


    )
}

export default Login