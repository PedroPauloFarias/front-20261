import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import authService from '../services/authService'

export function AuthProvider({ children }) {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState(() => authService.getUsuario())
  const [autenticado, setAutenticado] = useState(() => authService.isAutenticado())

  async function logar(email, senha) {
    const { usuario: dadosUsuario } = await authService.login(email, senha)
    setUsuario(dadosUsuario)
    setAutenticado(true)
    navigate('/dashboard')
  }

  function deslogar() {
    authService.logout()
    setUsuario(null)
    setAutenticado(false)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ usuario, autenticado, logar, deslogar }}>
      {children}
    </AuthContext.Provider>
  )
}