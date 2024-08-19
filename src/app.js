import {React, useState} from 'react';
import validator from 'validator';

function App(){
    const [errorMessage, setErrorMessage] = useState("");

    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, 
            minLowercase: 1,
            minUppercase: 1, 
            minNumber: 1, 
            minSymbol: 1
        })){
            setErrorMessage('Password Is Strong')
        }
        else {
            setErrorMessage('Password Is NOT Strong')
        }
    }
    return(
        <div className='validate'>
            <h1>React - Checking Password Strength</h1>
            <span>Enter Password:</span>
            <input type='password' onChange={(e) => validate(e.target.value) } /><br/>
            {errorMessage === '' ? null : <span>{errorMessage}</span>} 
        </div>
    );
}

export default App;