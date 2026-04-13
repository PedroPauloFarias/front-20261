import './Notas.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';
import { Card } from '../../components/Card/Card';

export function Notas() {
    return (
        <div className="pagina-notas">
            <a href="#conteudo-principal" className="pular-navegacao">Pular para o conteúdo principal</a>
            <Sidebar />
            <main id="conteudo-principal">
                <Topbar />
                <h2>Listagem de Notas</h2>
                <section className="notas-grid">
                    <Card 
                        titulo="BI e Data Warehousing"
                        rodapeTexto="Média Final: 8.75"
                        rodapeCor="cor-sucesso"
                    >
                        <p><strong>N1:</strong> 8.5</p>
                        <p><strong>N2:</strong> 9.0</p>
                    </Card>

                    <Card 
                        titulo="Construção de Frontend"
                        rodapeTexto="Média Final: Em andamento"
                        rodapeCor="cor-pendente"
                    >
                        <p><strong>N1:</strong> 7.0</p>
                        <p><strong>N2:</strong> - </p>
                    </Card>
                </section>
            </main>
        </div>
    );
}