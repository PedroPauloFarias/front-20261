import './Boletos.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Topbar } from '../../components/Topbar/Topbar';
import { Card } from '../../components/Card/Card';

export function Boletos() {
    return (
        <div className="pagina-boletos">
            <a href="#conteudo-principal" className="pular-navegacao">Pular para o conteúdo principal</a>
            <Sidebar />
            <main id="conteudo-principal">
                <Topbar />
                <h2>Listagem de Boletos</h2>
                <section className="boletos-grid">
                    <Card
                        titulo="Mensalidade - Abril/2026"
                        rodapeTexto="Status: Em Aberto"
                        rodapeCor="cor-alerta"
                    >
                        <p><strong>Vencimento:</strong> 10/04/2026</p>
                        <p><strong>Valor:</strong> R$ 850,00</p>
                    </Card>
                    <Card
                        titulo="Mensalidade - Março/2026"
                        rodapeTexto="Status: Pago"
                        rodapeCor="cor-sucesso"
                    >
                        <p><strong>Vencimento:</strong> 10/03/2026</p>
                        <p><strong>Valor:</strong> R$ 850,00</p>
                    </Card>
                </section>
            </main>
        </div>
    );
}