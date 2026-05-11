import './Boletos.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';

export function Boletos() {
    return (
        <div className="pagina-boletos">
            <a href="#conteudo-principal" className="pular-navegacao">Pular para o conteúdo principal</a>
            
            <Sidebar />

            <main id="conteudo-principal">
                <Topbar />
                
                <h2>Listagem de Boletos</h2>

                <section className="boletos-grid">
                    <article className="card-boleto">
                        <header><h3>Mensalidade - Abril/2026</h3></header>
                        <p><strong>Vencimento:</strong> 10/04/2026</p>
                        <p><strong>Valor:</strong> R$ 850,00</p>
                        <p className="status-aberto">Status: Em Aberto</p>
                    </article>

                    <article className="card-boleto">
                        <header><h3>Mensalidade - Março/2026</h3></header>
                        <p><strong>Vencimento:</strong> 10/03/2026</p>
                        <p><strong>Valor:</strong> R$ 850,00</p>
                        <p className="status-pago">Status: Pago</p>
                    </article>
                </section>
            </main>
        </div>
    );
}