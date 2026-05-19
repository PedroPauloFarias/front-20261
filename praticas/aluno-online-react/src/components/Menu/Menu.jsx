import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';
import './Menu.css';

export function Menu() {
  const { logout } = useAuth();

  return (
    <aside className="menu">
      <strong className="menu-titulo">Aluno Online</strong>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/faltas">Faltas</NavLink>
        <NavLink to="/notas">Notas</NavLink>
        <NavLink to="/boletos">Boletos</NavLink>
        <NavLink to="/requerimentos">Requerimentos</NavLink>
      </nav>
      <button className="btn-sair" onClick={logout}>Sair</button>
    </aside>
  );
}