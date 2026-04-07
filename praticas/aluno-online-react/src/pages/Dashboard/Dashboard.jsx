import './Dashboard.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';

export function Dashboard() {
    return (
        <div className="pagina-dashboard">
            <a href="#conteudo-principal" className="pular-navegacao">Pular para o conteúdo principal</a>
            
            <Sidebar />

            <main id="conteudo-principal">
                <Topbar />
                
                <h2>Bem-vindo ao portal do aluno</h2>

                <section className="dashboard-grid">
                    <article className="card">
                        <header><h3>Mural de Avisos</h3></header>
                        <p>Inscrição para o projeto de extensão</p>
                        <p>Eleição para representante de turma</p>
                    </article>

                    <article className="card">
                        <header><h3>Calendário Acadêmico</h3></header>
                        <p>23/02 - Início do período letivo 2026-1</p>
                        <p>25/04 - Prazo final para aplicação da P1</p>
                        <p>23/06 - Prazo final para aplicação da P2</p>
                        <p>04/07 - Fim do período letivo 2026-1</p>
                    </article>
                        
                    <article className="card">
                        <header><h3>Minhas Disciplinas</h3></header>
                        <p>BI e Data Warehousing</p>
                        <p>Construção de Frontend</p>
                    </article>
                </section>
            </main>
        </div>
    );
}