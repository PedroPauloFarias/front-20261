import { useState } from 'react';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  function login(dadosUsuario) {
    setUsuario(dadosUsuario);
    setAutenticado(true);
  }

  function logout() {
    setUsuario(null);
    setAutenticado(false);
  }

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}