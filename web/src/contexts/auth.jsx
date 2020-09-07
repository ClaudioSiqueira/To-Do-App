import React, { createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => (
  <AuthContext.Provider value={{signed: false}} >
    {children}
  </AuthContext.Provider>
);

export default AuthContext;