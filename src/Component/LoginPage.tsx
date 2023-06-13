import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

export type LoginPageProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginPage = ({ setIsLoggedIn }: LoginPageProps) => {
  const [values, setValues] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      const email = data.user.email;
      setValues(email || '');
      localStorage.setItem('email', email || '');
      setIsLoggedIn(true);
      navigate('/Home');
    });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setValues(storedEmail || '');
  }, []);

  return (
    <div>
      {values ? (
        <Home />
      ) : (
        <button onClick={handleClick}>Sign in with Google</button>
      )}
    </div>
  );
};

export default LoginPage;
