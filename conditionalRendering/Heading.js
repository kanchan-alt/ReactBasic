import React,{useState} from "react"

// using If/else statements
function Heading(){
    const [logIn, setLogIn] = useState(true)
    
        if(!logIn){
                return(
                <div>
                    <h1>Hi I login</h1>
                </div>
                )
            }
            else{

                return(
                    <div>
                    <h1>Hi I login</h1>
                    </div>
                )
            }

            
        }

    


export default Heading

//  using Ternary operator
function Heading1() {
    const [logIn, setLogIn] = useState(true);
  
    return (
      <div>
        {logIn ? (
          <h1>Hi, I'm logged in</h1>
        ) : (
          <h1>Hi, I'm not logged in</h1>
        )}
      </div>
    );
  }


// The logical && operator for conditional rendering like this:
  function Heading2() {
    const [logIn, setLogIn] = useState(true);
  
    return (
      <div>
        {logIn && <h1>Hi, I'm logged in</h1>}
        {!logIn && <h1>Hi, I'm not logged in</h1>}
      </div>
    );
  }