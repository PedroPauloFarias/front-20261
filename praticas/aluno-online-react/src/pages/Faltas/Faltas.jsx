import './Faltas.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';
import { Card } from '../../components/Card/Card';

export function Faltas() {
    return (
        <div className="pagina-faltas">
            <a href="#conteudo-principal" className="pular-navegacao">Pular para o conteúdo principal</a>
            <Sidebar />
            <main id="conteudo-principal">
                <Topbar />
                <h2>Listagem de Faltas</h2>
                <section className="faltas-grid">
                    <Card 
                        titulo="BI e Data Warehousing"
                        rodapeTexto="Status: Dentro do limite"
                        rodapeCor="cor-sucesso"
                    >
                        <p><strong>Faltas registradas:</strong> 2</p>
                        <p><strong>Limite permitido:</strong> 10</p>
                    </Card>

                    <Card 
                        titulo="Construção de Frontend"
                        rodapeTexto="Status: Risco de reprovação"
                        rodapeCor="cor-alerta"
                    >
                        <p><strong>Faltas registradas:</strong> 8</p>
                        <p><strong>Limite permitido:</strong> 10</p>
                    </Card>
                </section>
            </main>
        </div>
    );
}