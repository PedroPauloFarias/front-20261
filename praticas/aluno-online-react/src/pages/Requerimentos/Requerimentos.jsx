import { Outlet, useNavigate, useMatch } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { useAuth } from '../../contexts/useAuth';
import './Requerimentos.css';

export function Requerimentos() {
  const navigate = useNavigate();
  const isIndex = useMatch('/requerimentos');
  const { deslogar } = useAuth();

  function handleErro(erro) {
    if (erro?.status === 401) {
      deslogar();
    }
  }

  return (
    <>
      {isIndex && (
        <>
          <div className="requerimentos-header">
            <h2>Listagem de Requerimentos</h2>
            <button
              className="btn-novo-requerimento"
              onClick={() => navigate('/requerimentos/novo')}
            >
              ➕ Novo Requerimento
            </button>
          </div>
          <section className="requerimentos-grid">
            <Card titulo="Declaração de Matrícula" rodapeTexto="Status: Disponível para download" rodapeCor="cor-sucesso">
              <p><strong>Data da solicitação:</strong> 05/04/2026</p>
            </Card>
            <Card titulo="Histórico Escolar" rodapeTexto="Status: Em análise pela secretaria" rodapeCor="cor-info">
              <p><strong>Data da solicitação:</strong> 06/04/2026</p>
            </Card>
          </section>
        </>
      )}
      <Outlet context={{ handleErro }} />
    </>
  );
}