import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    email: '',
    displayName: ''
  });

  useEffect(() => {
    const unsubscibe = auth().onAuthStateChanged(setCurrentUser);

    return () => unsubscibe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
