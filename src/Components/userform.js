import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    
    const [lastname, setlastname] = useState("");
    const [namelenghtcheck, setnamelenghtcheck] = useState(false);

    const [email, setEmail] = useState("");
    const [emaillenghtcheck, setemaillenghtcheck] = useState(false);

    const [password, setPassword] = useState("");  
    const [confirmpassword, setconfirmpassword] = useState("");  
    const [passwordlenghtcheck, setemail] = useState(false);

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
    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>firstname: </label> 
                <input type="text" onChange={ (e) => setfirstname(e.target.value) } value={ firstname }/>
            </div>
            <div>
                <label>lastname: </label> 
                <input type="text" onChange={ (e) => setlastname(e.target.value) } value={ lastname }/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) }value={ password } />
            </div>
            <div>
                <label>confirmpassword: </label>
                <input type="text" onChange={ (e) => setconfirmpassword(e.target.value) }value={ confirmpassword } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
        FirstName :{firstname}
        </div>
        <div>
        LastName: {lastname}

        </div>
        <div>

        Email:{email}
        </div>
        <div>

        Password:{ password } 
        </div>
       

        </>
    );
};
    
export default UserForm;
