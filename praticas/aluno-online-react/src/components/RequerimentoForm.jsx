import { useState } from "react";
import { cadastrarRequerimento } from "../services/requerimentoService";

function RequerimentoForm({ onRequerimentoCadastrado }) {
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [erro, setErro] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!tipo || !descricao) {
      setErro("Preencha todos os campos.");
      return;
    }

    const novoRequerimento = { tipo, descricao, status: "pendente" };

    const cadastrado = await cadastrarRequerimento(novoRequerimento);
    onRequerimentoCadastrado(cadastrado);

    setTipo("");
    setDescricao("");
    setErro("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Novo Requerimento</h2>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <div>
        <label>Tipo:</label>
        <input
          type="text"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
      </div>

      <div>
        <label>Descrição:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default RequerimentoForm;