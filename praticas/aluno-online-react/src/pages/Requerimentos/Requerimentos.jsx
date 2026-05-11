import { Card } from '../../components/Card/Card';
import './Requerimentos.css';

export function Requerimentos() {
  return (
    <>
      <h2>Listagem de Requerimentos</h2>
      <section className="requerimentos-grid">
        <Card titulo="Declaração de Matrícula" rodapeTexto="Status: Disponível para download" rodapeCor="cor-sucesso">
          <p><strong>Data da solicitação:</strong> 05/04/2026</p>
        </Card>
        <Card titulo="Histórico Escolar" rodapeTexto="Status: Em análise pela secretaria" rodapeCor="cor-info">
          <p><strong>Data da solicitação:</strong> 06/04/2026</p>
        </Card>
      </section>
    </>
  );
}