import './App.css';

//ALT + SHIFT + F = Formata o código

//JSX= JS + XML
function App() {
  return (
    <main>
      {/*chaves no JSX aceita códigos JS*/}
      <img src="/learn.svg" alt="logotipo da aplicação" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matricula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;