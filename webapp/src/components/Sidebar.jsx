import { NavLink } from 'react-router-dom';
import { BookOpen, LogOut, Home } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import sessionsData from '../data/sessionsData.json';

const Sidebar = () => {
  const { user, logout, progress } = useAuth();

  const totalQuestions = sessionsData.reduce((acc, s) => acc + (s.quiz ? s.quiz.length : 0), 0);
  const totalCorrect = Object.values(progress).reduce((acc, val) => acc + val, 0);
  const overallProgress = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div className="sidebar glass">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
        <BookOpen size={32} color="var(--primary)" />
        <h2 style={{ fontSize: '1.2rem', margin: 0 }}>Curso IA</h2>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', borderRadius: '8px',
            color: isActive ? 'white' : 'var(--text-muted)',
            background: isActive ? 'var(--primary)' : 'transparent',
            textDecoration: 'none', transition: 'all 0.2s'
          })}
        >
          <Home size={20} /> Inicio
        </NavLink>
        
        <div style={{ marginTop: '24px', marginBottom: '8px', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Sesiones
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto', flex: 1, paddingRight: '8px' }}>
          {sessionsData.map((session) => {
            const hasScore = progress[session.id] !== undefined;
            const scoreColor = hasScore ? (progress[session.id] >= 5 ? 'var(--success)' : 'var(--error)') : 'var(--text-muted)';
            return (
            <NavLink 
              key={session.id}
              to={`/session/${session.id}`}
              style={({ isActive }) => ({
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: '6px', fontSize: '0.9rem',
                color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                background: isActive ? 'rgba(0, 119, 255, 0.1)' : 'transparent',
                textDecoration: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
              })}
            >
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{session.id}: {session.title}</span>
              {hasScore && <span style={{ fontSize: '0.7rem', color: scoreColor, fontWeight: 'bold' }}>{progress[session.id]}/7</span>}
            </NavLink>
          )})}
        </div>
      </nav>

      <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
        <div style={{ marginBottom: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Usuario: {user?.name}
          <div style={{ marginTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
              <span>Progreso Global</span>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{overallProgress}%</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: `${overallProgress}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.5s ease' }} />
            </div>
          </div>
        </div>
        <button onClick={logout} className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>
          <LogOut size={16} /> Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
