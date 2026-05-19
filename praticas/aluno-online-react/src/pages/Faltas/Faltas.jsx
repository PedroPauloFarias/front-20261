import { Card } from '../../components/Card/Card';
import './Faltas.css';

export function Faltas() {
  return (
    <>
      <h2>Listagem de Faltas</h2>
      <section className="faltas-grid">
        <Card titulo="BI e Data Warehousing" rodapeTexto="Status: Dentro do limite" rodapeCor="cor-sucesso">
          <p><strong>Faltas registradas:</strong> 2</p>
          <p><strong>Limite permitido:</strong> 10</p>
        </Card>
        <Card titulo="Construção de Frontend" rodapeTexto="Status: Risco de reprovação" rodapeCor="cor-alerta">
          <p><strong>Faltas registradas:</strong> 8</p>
          <p><strong>Limite permitido:</strong> 10</p>
        </Card>
      </section>
    </>
  );
}