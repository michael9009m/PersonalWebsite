import { data } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ color: 'var(--accent)', fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>04. skills</p>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem', color: 'var(--text)' }}>
        Tech Stack
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {data.skills.map((s, i) => (
          <div key={i}>
            <p style={{ color: 'var(--accent)', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
              {s.category}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {s.items.map((item, j) => (
                <span key={j} style={{
                  padding: '0.5rem 1.25rem', border: '1px solid var(--border)',
                  color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', fontSize: '0.85rem',
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-muted)'; }}
                >{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
