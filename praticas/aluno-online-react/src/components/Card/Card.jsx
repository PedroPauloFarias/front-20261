import './Card.css';

export function Card({ titulo, children, rodapeTexto, rodapeCor }) {
  return (
    <article className="card">
      <header className="card-header">
        <h3>{titulo}</h3>
      </header>
      <div className="card-corpo">
        {children}
      </div>
      {rodapeTexto && (
        <footer className={`card-rodape ${rodapeCor}`}>
          {rodapeTexto}
        </footer>
      )}
    </article>
  );
}