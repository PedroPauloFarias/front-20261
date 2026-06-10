import { useEffect, useState } from "react";
import { listarRequerimentos } from "../services/requerimentoService";
import RequerimentoForm from "../components/RequerimentoForm";

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);

  useEffect(() => {
    listarRequerimentos().then((dados) => setRequerimentos(dados));
  }, []);

  function handleRequerimentoCadastrado(novo) {
    setRequerimentos((prev) => [...prev, novo]);
  }

  return (
    <div>
      <h1>Requerimentos</h1>

      <RequerimentoForm onRequerimentoCadastrado={handleRequerimentoCadastrado} />

      <h2>Lista de Requerimentos</h2>
      <ul>
        {requerimentos.map((req) => (
          <li key={req.id}>
            <strong>{req.tipo}</strong> — {req.descricao} ({req.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Requerimentos;