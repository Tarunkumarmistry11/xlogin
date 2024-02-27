import React, { useState } from 'react'
import './login.css'

function Login() {
     const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")
     const [error, setError] = useState("")
     const [isSubmitted, setIsSubmitted] = useState(false)

     const handleSubmit = (e) => {
         e.preventDefault();
         if(username === 'user' && password === "password") {
            setError("");
            setIsSubmitted(true);
         } else {
            setError("Invalid username or password");
            setIsSubmitted(false)
         }
     }

  return (
    <div className='container'> 
         <h1>Login Page</h1>
        {isSubmitted ? (
            <div>
                <p>Welcome, {username}</p>
            </div>
        ) : (      
             <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" 
             id='username' 
             value={username} 
             placeholder='username' 
             onChange={(e) => setUsername(e.target.value)}
             required />
             </div>

             <div>
            <label htmlFor="password">Password:</label>
            <input type="password" 
             id='password' 
             value={password} 
             placeholder='password' 
             onChange={(e) => setPassword(e.target.value)}
             required />
             </div>
             <button type='submit'>Submit</button>
         </form>)}
    </div>
  )
}

export default Login