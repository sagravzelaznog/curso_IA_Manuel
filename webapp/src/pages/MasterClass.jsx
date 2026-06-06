import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import sessionsData from '../data/sessionsData.json';
import Quiz from '../components/Quiz';
import { useAuth } from '../context/AuthContext';
import DonationSection from '../components/DonationSection';

// React component to dangerously set inner HTML since content is extracted from HTML
const HtmlContent = ({ html }) => {
  if (!html) return null;
  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
};

const MasterClass = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateProgress } = useAuth();
  
  const currentIndex = sessionsData.findIndex(s => s.id === id);
  
  if (currentIndex === -1) {
    return <Navigate to="/" replace />;
  }
  
  const session = sessionsData[currentIndex];
  const prevSession = currentIndex > 0 ? sessionsData[currentIndex - 1] : null;
  const nextSession = currentIndex < sessionsData.length - 1 ? sessionsData[currentIndex + 1] : null;

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '80px' }}>
      <header className="glass-card" style={{ marginBottom: '40px', background: 'linear-gradient(135deg, rgba(0, 119, 255, 0.1) 0%, transparent 100%)', borderTop: '2px solid var(--primary)' }}>
        <div style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '2px', marginBottom: '8px', fontSize: '0.9rem' }}>
          MASTER CLASS {session.id}
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{session.title}</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{session.meta}</p>
      </header>

      {session.objectives && (
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🎯</span>
            Objetivos de Aprendizaje
          </h2>
          <div className="glass-card">
            <HtmlContent html={session.objectives} />
          </div>
        </section>
      )}

      {session.content && (
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📚</span>
            Contenido Teórico
          </h2>
          <div style={{ padding: '0 16px' }}>
            <HtmlContent html={session.content} />
          </div>
        </section>
      )}

      {session.practical && (
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>💻</span>
            Actividad Práctica
          </h2>
          <div className="glass-card" style={{ background: 'rgba(0,0,0,0.3)' }}>
            <HtmlContent html={session.practical} />
          </div>
        </section>
      )}

      {session.exercises && (
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🏋️</span>
            Ejercicios
          </h2>
          <div className="glass-card">
            <HtmlContent html={session.exercises} />
          </div>
        </section>
      )}

      {/* Quiz Section */}
      <section style={{ marginBottom: '64px' }}>
        <Quiz quizData={session.quiz} onComplete={(score) => updateProgress(session.id, score)} />
      </section>

      <DonationSection />

      {/* Bottom Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
        {prevSession ? (
          <button className="btn btn-outline" onClick={() => navigate(`/session/${prevSession.id}`)}>
            <ArrowLeft size={18} /> Anterior: {prevSession.title.substring(0, 20)}...
          </button>
        ) : <div />}
        
        {nextSession ? (
          <button className="btn btn-primary" onClick={() => navigate(`/session/${nextSession.id}`)}>
            Siguiente: {nextSession.title.substring(0, 20)}... <ArrowRight size={18} />
          </button>
        ) : <div />}
      </div>
    </div>
  );
};

export default MasterClass;
