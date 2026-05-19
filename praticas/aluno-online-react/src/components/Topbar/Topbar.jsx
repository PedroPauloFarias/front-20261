import { useAuth } from '../../contexts/AuthContext';
import './Topbar.css';
import { useAuth } from '../../contexts/useAuth';

export function Topbar() {
  const { usuario } = useAuth();

  return (
    <header className="topbar">
      <h1>Olá, {usuario?.email}!</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Avatar do usuário" />
    </header>
  );
}