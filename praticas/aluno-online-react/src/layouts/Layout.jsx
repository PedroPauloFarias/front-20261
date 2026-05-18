import { Outlet } from 'react-router-dom';
import { Menu } from '../components/Menu/Menu';
import { Topbar } from '../components/Topbar/Topbar';
import './Layout.css';

export function Layout() {
  return (
    <div className="layout">
      <Menu />
      <div className="layout-conteudo">
        <Topbar />
        <main id="conteudo-principal">
          <Outlet />
        </main>
      </div>
    </div>
  );
}