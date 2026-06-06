import { Link } from 'react-router-dom';
import { Play, Award } from 'lucide-react';
import sessionsData from '../data/sessionsData.json';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { progress } = useAuth();

  const modules = [
    { id: 1, name: "Introducción a Python", prefix: "1-" },
    { id: 2, name: "Matemáticas para IA", prefix: "2-" },
    { id: 3, name: "Machine Learning", prefix: "3-" },
    { id: 4, name: "Deep Learning", prefix: "4-" },
    { id: 5, name: "Proyectos Avanzados", prefix: "5-" }
  ];

  const moduleProgress = modules.map(mod => {
    const modSessions = sessionsData.filter(s => s.id.startsWith(mod.prefix));
    const totalQuestions = modSessions.reduce((acc, s) => acc + (s.quiz ? s.quiz.length : 0), 0);
    const correctAnswers = modSessions.reduce((acc, s) => acc + (progress[s.id] || 0), 0);
    const percent = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    
    return { ...mod, percent, correctAnswers, totalQuestions };
  });

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Bienvenido al Curso de IA</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>De Cero a Experto en 100 Sesiones</p>
      </header>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Award color="var(--primary)" /> Progreso por Módulo
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
          {moduleProgress.map(mod => (
            <div key={mod.id} className="glass-card" style={{ padding: '16px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: 600 }}>Módulo {mod.id}: {mod.name}</span>
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{mod.percent}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${mod.percent}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.5s ease' }} />
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', textAlign: 'right' }}>
                {mod.correctAnswers} / {mod.totalQuestions} respuestas correctas
              </div>
            </div>
          ))}
        </div>
      </section>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Sesiones Recientes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {sessionsData.slice(0, 6).map((session) => (
          <div key={session.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '8px', fontWeight: 600 }}>SESIÓN {session.id}</div>
            <h3 style={{ marginBottom: '16px', fontSize: '1.1rem' }}>{session.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px', flex: 1 }}>{session.meta}</p>
            <Link to={`/session/${session.id}`} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              <Play size={16} /> Iniciar Sesión
            </Link>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>Usa el menú lateral para navegar por todas las sesiones del curso.</p>
      </div>
    </div>
  );
};

export default Dashboard;
