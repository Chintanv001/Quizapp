import React from 'react'

export type LoginPageProps = {
    setIsLoggedIn : React.Dispatch<React.SetStateAction<boolean>>
}

const LoginPage = ({setIsLoggedIn} : LoginPageProps) => {
    const handleLogin = () => {
        
        setIsLoggedIn(true);
      };
    
      return (
        <div>
          <h1>Login Page</h1>
          <button onClick={handleLogin}>Log In</button>
        </div>
      );
}

export default LoginPage