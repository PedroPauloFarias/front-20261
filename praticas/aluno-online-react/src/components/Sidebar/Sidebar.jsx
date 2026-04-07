import './Sidebar.css';

export function Sidebar() {
    return (
        <aside className="sidebar">
            <strong>Aluno Online</strong>
            <nav>
                <a href="#">Dashboard</a>
                <a href="#">Disciplinas</a>
                <a href="#">Calendário</a>
            </nav>
        </aside>
    );
}