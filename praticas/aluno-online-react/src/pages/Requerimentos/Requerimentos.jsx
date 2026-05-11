import './Requerimentos.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';

export function Requerimentos() {
    return (
        <div className="pagina-requerimentos">
            <a href="#conteudo-principal" className="pular-navegacao">Pular para o conteúdo principal</a>
            
            <Sidebar />

            <main id="conteudo-principal">
                <Topbar />
                
                <h2>Listagem de Requerimentos</h2>

                <section className="requerimentos-grid">
                    <article className="card-requerimento">
                        <header><h3>Declaração de Matrícula</h3></header>
                        <p><strong>Data da solicitação:</strong> 05/04/2026</p>
                        <p className="req-concluido"><strong>Status:</strong> Disponível para download</p>
                    </article>

                    <article className="card-requerimento">
                        <header><h3>Histórico Escolar</h3></header>
                        <p><strong>Data da solicitação:</strong> 06/04/2026</p>
                        <p className="req-andamento"><strong>Status:</strong> Em análise pela secretaria</p>
                    </article>
                </section>
            </main>
        </div>
    );
}