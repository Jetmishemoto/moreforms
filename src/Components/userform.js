import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");

    const [lengthcheck, setlengthcheck] = useState("");
    
    const [email, setEmail] = useState("");
    const [emaillengthcheck, setemaillengthcheck] = useState("");
    

    const [password, setPassword] = useState("");  
    const [confirmpassword, setconfirmpassword] = useState("");  

    const [passwordlengthcheck, setpasswordlengthcheck] = useState("");
    const [passworderror, setpassworderror] = useState("");
    const [passwordmatchcheck, setpasswordmatchcheck] = useState(false);

    const [hasBeenSubmitted, sethasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            firstname,
            lastname, 
            email, 
            password,
            confirmpassword
        };
        console.log("Welcome", newUser);
    };
    
    const handleName = (e) => {
        
        
        
        const inputValue = e.target.value ;
        const lenghterror = e.target.value.length 
        setlengthcheck(e.target.value);

        if(lenghterror < 1){
            setlengthcheck("You need a name!!!")
        }else if(lenghterror < 3){
            setlengthcheck("There is no way your name is that short")
        }else{
            setlengthcheck("")
        }

        if(lenghterror) setfirstname(inputValue);
        if(lenghterror) setlastname(inputValue);
        


    };


    const handleEmail = (e) => {
        
        setemaillengthcheck(e.target.value);
        const inputValue = e.target.value;
        const emaillenghterror = e.target.value.length 

    
        if(emaillenghterror < 5){
            setemaillengthcheck("Email is to short!!!")
        }else{
            setemaillengthcheck("")
        }

        
        if(emaillenghterror) setEmail(inputValue);
    };

    


    const handlePassword = (e) => {
        
        setpasswordlengthcheck(e.target.value);
        const inputValue = e.target.value;
        const passwordlengthcheck = e.target.value.length 

    
        if(passwordlengthcheck < 8 ){
            setpassworderror("Password to short")
        }else{
            setpassworderror("")
        }

        
        if(passwordlengthcheck) setPassword(inputValue);


    };
    const handleConfirmPassword = (e) => {
        
        setpasswordmatchcheck(e.target.value);
        const inputValue = e.target.value;
        const passwordlenghtcheck = e.target.value.length 

    
        if(inputValue != password  ){

            setpasswordmatchcheck("Passwords dosnt match")
        }else if(passwordlenghtcheck < 8){
            setpasswordmatchcheck("Password to short")
        }
        else{
            setpasswordmatchcheck("")
        }

        
        if(passwordlenghtcheck) setconfirmpassword(inputValue);


    };


    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange= {handleName}/>
                {
                lengthcheck ?
                    <p>{lengthcheck} </p> : null
                }
                
            </div>


            <div>
                <label>Last Name: </label> 
                <input type="text" onChange= {handleName}/>
                {
                lengthcheck ?
                    <p>{lengthcheck} </p> : null
                }

            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={handleEmail} />
                {
                emaillengthcheck ?
                    <p>{emaillengthcheck} </p> : null
                }

            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlePassword} />
                {
                passworderror ?
                    <p>{passworderror} </p> : null
                }
            </div>
            <div>
                <label>Confirmpassword: </label>
                <input type="text" onChange={handleConfirmPassword} />
                {
                passwordmatchcheck ?
                    <p>{passwordmatchcheck} </p> : null
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        </>
    );
};
    
export default UserForm;
