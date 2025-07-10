import React, { useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'



const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // error handling
  const[errors,setErrors]=useState({})
  const[success , setSuccess]=useState(false)
  const[isloading,setIsLoading]=useState(false)


  const formHandler = async (e) => {
    e.preventDefault();
    const userData = { username, email, password }
    setIsLoading(true)


    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/register/", userData);
      console.log('show response =>', response.data);
      setErrors({})
      setSuccess(true)

      
    }

    catch (error) {
      console.log("registration failed", error.response?.data || error.message);
      setErrors(error.response ? error.response.data : { non_field_errors: 'Network error, please try again.' });
    }

    finally{
      setIsLoading(false)
    }

    
  }





  return (
    <>
    <div className='container'>Register</div>


    {success ? (
        <div><h2 class="alert alert-success" >New user registered successfully</h2></div>
      ) : (
        <div >
          <h2 >
            {errors.username && <div class="alert alert-danger" >{errors.username}</div>}
            {errors.email && <div class="alert alert-danger" >{errors.email}</div>}
            {errors.password && <div class="alert alert-danger">{errors.password}</div>}
            {errors.non_field_errors && <div class="alert alert-danger"> {errors.non_field_errors}</div>}
          </h2>
        </div>
      )}

    <form onSubmit={formHandler}>
      
    <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
    <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
    <button type='submit'>Register</button>
    </form>
    

    {isloading && (<div class="alert alert-warning" > <h5><FontAwesomeIcon icon={faSpinner}/> loading ... </h5></div>)}
    
    </>
  )
}

export default Register