import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './Firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userID, setUserID] = useState(null); // Dodaj nowy stan na userID

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        setUserID(authUser.uid); // Ustaw userID
        localStorage.setItem('user', JSON.stringify(authUser));
      } else {
        setUser(null);
        setUserID(null); // Resetuj userID
        localStorage.removeItem('user');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signIn = (name, email, profilePic) => {
    setUserID(auth.currentUser.uid); // Ustaw userID podczas logowania
    localStorage.setItem('userID', auth.currentUser.uid); // Przechowaj userID w localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('profilePic', profilePic);
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        setUserID(null); // Resetuj userID po wylogowaniu
        localStorage.removeItem('userID'); // Usuń userID z localStorage
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('profilePic');
      })
      .catch((error) => {
        console.error('Błąd podczas wylogowywania:', error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, userID, signIn, signOut }}> {/* Dodaj userID do wartości kontekstu */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// ... (reszta kodu)
