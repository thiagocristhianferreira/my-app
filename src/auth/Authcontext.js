import React, { useEffect, useState, createContext } from 'react';
import { authConfig } from './config';
import firebase from 'firebase/app';

import './style.css';
import imgLogo from '../Images/Marvel_Logo.svg.png';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
      // setLoading(false);
    });
  }, []);

  // if (loading) {
  //   return (
  //   <React.Fragment>
  //     <img
  //       className="img-logo"
  //       src={ imgLogo }
  //       alt="Marvel"
  //     />
  //   </React.Fragment>
  //   )
  // }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
