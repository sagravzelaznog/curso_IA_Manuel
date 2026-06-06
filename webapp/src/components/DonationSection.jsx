import { Heart } from 'lucide-react';

const DonationSection = () => {
  return (
    <section style={{ marginTop: '64px', marginBottom: '40px' }}>
      <div className="glass-card animate-fade-in" style={{ textAlign: 'center', padding: '32px', background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, transparent 100%)', borderTop: '2px solid #ec4899' }}>
        <Heart color="#ec4899" size={48} style={{ margin: '0 auto 16px auto' }} />
        <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Apoya este proyecto</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
          Si este curso te ha sido útil y deseas apoyar la creación de más contenido gratuito, puedes realizar una donación voluntaria. ¡Cualquier aporte es muy agradecido!
        </p>
        <div style={{ display: 'inline-block', background: 'rgba(0,0,0,0.3)', padding: '16px 32px', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '8px' }}>CLABE Interbancaria</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', letterSpacing: '2px' }}>722969020087766753</div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
