import './Faltas.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';

export function Faltas() {
    return (
        <div className="pagina-faltas">
            {/* Componente Estrutural 1 */}
            <Sidebar />

            <main id="conteudo-principal">
                {/* Componente Estrutural 2 */}
                <Topbar />
                
                <h2>Listagem de Faltas</h2>
                {/* ... resto do conteúdo de faltas ... */}
            </main>
        </div>
    );
}