import { Login } from './pages/Login/Login';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Faltas } from './pages/Faltas/Faltas';
import { Notas } from './pages/Notas/Notas';
import { Boletos } from './pages/Boletos/Boletos';
import { Requerimentos } from './pages/Requerimentos/Requerimentos';

export default function App() {
  return (
    <>
      {/* Para testar o layout de cada página, descomente apenas UMA por vez.
        Esta é a exigência da Prática 03.
      */}

      <Login /> 

      {/* <Dashboard /> */}
      {/* <Faltas /> */}
      {/* <Notas /> */}
      {/* <Boletos /> */}
      {/* <Requerimentos /> */}
    </>
  );
}