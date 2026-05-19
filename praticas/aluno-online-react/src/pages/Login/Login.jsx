import { useState } from 'react';
import { InputField } from '../../components/InputField/InputField';
import './Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    let valido = true;

    if (!email) {
      setErroEmail('O e-mail é obrigatório.');
      valido = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErroEmail('Informe um e-mail válido.');
      valido = false;
    } else {
      setErroEmail('');
    }

    if (!senha) {
      setErroSenha('A senha é obrigatória.');
      valido = false;
    } else if (senha.length < 6) {
      setErroSenha('A senha deve ter no mínimo 6 caracteres.');
      valido = false;
    } else {
      setErroSenha('');
    }

    if (valido) {
      alert('Login realizado com sucesso!');
    }
  }

  return (
    <div className="pagina-login">
      <main className="login-caixa">
        <header className="login-cabecalho">
          <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Logo" />
          <h1>Aluno Online</h1>
        </header>

        <form onSubmit={handleSubmit}>
          <InputField
            id="email"
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            erro={erroEmail}
          />
          <InputField
            id="senha"
            label="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            erro={erroSenha}
          />
          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>
  );
}