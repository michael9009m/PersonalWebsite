import { data } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 2.5rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <p style={{ color: 'var(--accent)', fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>05. contact</p>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem', color: 'var(--text)' }}>
        Get In Touch
      </h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto 3rem' }}>
        I am actively looking for new opportunities. Whether you have a question, a role, or just want to connect, my inbox is open.
      </p>
      <a href={`mailto:${data.email}`} style={{
        display: 'inline-block', padding: '1rem 2.5rem',
        border: '1px solid var(--accent)', color: 'var(--accent)',
        fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', letterSpacing: '0.1em',
        textDecoration: 'none', transition: 'all 0.2s ease', marginBottom: '4rem',
      }}
        onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--bg)'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
      >
        Say Hello
      </a>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <a href={data.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', textDecoration: 'none' }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
        >GitHub</a>
        <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', textDecoration: 'none' }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
        >LinkedIn</a>
        <a href={`mailto:${data.email}`} style={{ color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', textDecoration: 'none' }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
        >Email</a>
      </div>
      <p style={{ color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', marginTop: '2rem' }}>
        Built by Michael Martinez
      </p>
    </section>
  );
}
