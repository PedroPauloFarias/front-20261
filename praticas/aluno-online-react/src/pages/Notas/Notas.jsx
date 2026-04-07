import './Notas.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';

export function Notas() {
    return (
        <div className="pagina-notas">
            <a href="#conteudo-principal" className="pular-navegacao">Pular para o conteúdo principal</a>
            
            <Sidebar />

            <main id="conteudo-principal">
                <Topbar />
                
                <h2>Listagem de Notas</h2>

                <section className="notas-grid">
                    <article className="card-nota">
                        <header><h3>BI e Data Warehousing</h3></header>
                        <p><strong>N1:</strong> 8.5</p>
                        <p><strong>N2:</strong> 9.0</p>
                        <p className="media-aprovado"><strong>Média Final:</strong> 8.75</p>
                    </article>

                    <article className="card-nota">
                        <header><h3>Construção de Frontend</h3></header>
                        <p><strong>N1:</strong> 7.0</p>
                        <p><strong>N2:</strong> - </p>
                        <p className="media-pendente"><strong>Média Final:</strong> Em andamento</p>
                    </article>
                </section>
            </main>
        </div>
    );
}