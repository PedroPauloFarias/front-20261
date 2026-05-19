import { NavLink } from 'react-router-dom';
import './Menu.css';

export function Menu() {
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
    </aside>
  );
}