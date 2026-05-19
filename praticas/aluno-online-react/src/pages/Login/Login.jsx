import { useState } from 'react';
import { useAuth } from '../../contexts/useAuth';
import './Login.css';

export function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }
    login({ email });
  }

  return (
    <div className="pagina-login">
      <main>
        <header>
          <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Logo" />
          <h1>Aluno Online</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <span className="erro">{erro}</span>
          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>
  );
}