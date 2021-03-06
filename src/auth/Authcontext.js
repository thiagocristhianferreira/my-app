import React, { useEffect, useState, createContext } from 'react';

import './style.css';
import imgLogo from '../Images/Marvel_Logo.svg.png';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
    <React.Fragment>
      <div>
        <img
          style={{
            display: "block",
            marginTop: "15%",
            marginLeft: "auto",
            marginRight: "auto",
            width: "20%"
          }}
          src={ imgLogo }
          alt="Marvel"
        />
      </div>
    </React.Fragment>
    )
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
  );
};
