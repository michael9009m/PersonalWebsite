import { data } from '../data/content';

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ color: 'var(--accent)', fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>03. projects</p>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem', color: 'var(--text)' }}>
        Things I've Built
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {data.projects.map((p, i) => (
          <div key={i} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            padding: '2rem', transition: 'border-color 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)' }}>{p.name}</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={p.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >GitHub</a>
                {p.live && p.live !== '#' && (
                  <a href={p.live} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                  >Live</a>
                )}
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.description}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {p.bullets.map((b, j) => (
                <li key={j} style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▹</span>{b}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {p.tech.map((t, j) => (
                <span key={j} style={{
                  padding: '0.25rem 0.75rem', border: '1px solid var(--border)',
                  color: 'var(--accent)', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem',
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
