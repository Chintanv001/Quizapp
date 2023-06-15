import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

export type LoginPageProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginPage = ({ setIsLoggedIn }: LoginPageProps) => {
  const navigate = useNavigate();
  const storedUserInfo = localStorage.getItem('userInfo');
  const [userInfo, setUserInfo] = useState<{ name: string; email: string }>(
    storedUserInfo ? JSON.parse(storedUserInfo) : { name: '', email: '' }
  );

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const displayName = user.displayName;
      const email = user.email;

      setUserInfo({ name: displayName || '', email: email || '' });
      localStorage.setItem('userInfo', JSON.stringify({ name: displayName, email }));
      setIsLoggedIn(true);
      navigate('/Home');
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <div>
      {userInfo.email ? (
        <Home name={userInfo.name} email={userInfo.email} />
      ) : (
        <button onClick={handleClick}>Sign in with Google</button>
      )}
    </div>
  );
};

export default LoginPage;
