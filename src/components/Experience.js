import { useState } from 'react';
import { data } from '../data/content';

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = data.experience[active];

  return (
    <section id="experience" style={{ padding: '8rem 2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ color: 'var(--accent)', fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>02. experience</p>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem', color: 'var(--text)' }}>
        Where I've Worked
      </h2>
      <div style={{ display: 'flex', gap: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '160px', borderLeft: '1px solid var(--border)' }}>
          {data.experience.map((e, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '0.75rem 1.25rem', textAlign: 'left', background: 'none', border: 'none',
              borderLeft: active === i ? '2px solid var(--accent)' : '2px solid transparent',
              color: active === i ? 'var(--accent)' : 'var(--text-muted)',
              fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', cursor: 'none',
              transition: 'all 0.2s ease', marginLeft: '-1px',
            }}>
              {e.company.split(' ')[0]}
            </button>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.25rem' }}>
            {exp.role} <span style={{ color: 'var(--accent)' }}>@ {exp.company}</span>
          </h3>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
            {exp.dates} · {exp.location}
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {exp.bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.15rem' }}>▹</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
