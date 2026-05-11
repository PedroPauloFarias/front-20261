import './Login.css';

export function Login() {
    return (
        <div className="pagina-login">
            <main id="conteudo-principal">
                <header>
                    <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Icone de chapeu" />
                    <h1>Aluno Online</h1>
                </header>

                <form id="formLogin">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" />
                    <span id="emailErro" className="erro"></span>

                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" name="senha" />
                    <span id="senhaErro" className="erro"></span>

                    <button type="button" id="botaoEntrar">Entrar</button>
                </form>
            </main>

            <footer>
                <p>&copy; 2026. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}