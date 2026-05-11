import './Card.css';

export function Card(props) {
    return (
        <article className="card">
            <header>
                <h3>{props.titulo}</h3>
            </header>
            <div className="card-conteudo">
                {props.children}
                
                {}
                {props.rodapeTexto && (
                    <p className={`card-rodape ${props.rodapeCor || ''}`}>
                        {props.rodapeTexto}
                    </p>
                )}
            </div>
        </article>
    );
}