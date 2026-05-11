import './Requerimentos.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';
import { Card } from '../../components/Card/Card';

export function Requerimentos() {
    return (
        <div className="pagina-requerimentos">
            <a href="#conteudo-principal" className="pular-navegacao">Pular para o conteúdo principal</a>
            <Sidebar />
            <main id="conteudo-principal">
                <Topbar />
                <h2>Listagem de Requerimentos</h2>
                <section className="requerimentos-grid">
                    <Card
                        titulo="Declaração de Matrícula"
                        rodapeTexto="Status: Disponível para download"
                        rodapeCor="cor-sucesso"
                    >
                        <p><strong>Data da solicitação:</strong> 05/04/2026</p>
                    </Card>
                    <Card
                        titulo="Histórico Escolar"
                        rodapeTexto="Status: Em análise pela secretaria"
                        rodapeCor="cor-info"
                    >
                        <p><strong>Data da solicitação:</strong> 06/04/2026</p>
                    </Card>
                </section>
            </main>
        </div>
    );
}