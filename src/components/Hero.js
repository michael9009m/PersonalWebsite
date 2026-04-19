import { useEffect, useState } from 'react';
import { data } from '../data/content';

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = data.title;

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 2.5rem', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse at 20% 50%, #00ff8711 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #00ff8708 0%, transparent 50%)',
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        <p style={{ color: 'var(--accent)', fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>
          &gt; hello, world
        </p>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--text)' }}>
          {data.name.split(' ')[0]}<br />
          <span style={{ color: 'var(--accent)' }}>{data.name.split(' ')[1]}</span>
        </h1>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '2rem' }}>
          {displayed}<span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>|</span>
        </p>
        <p style={{ maxWidth: '600px', lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '3rem' }}>
          {data.about}
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={data.github} target="_blank" rel="noreferrer" style={{
            padding: '0.75rem 2rem', border: '1px solid var(--accent)', color: 'var(--accent)',
            fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', letterSpacing: '0.1em',
            textDecoration: 'none', transition: 'all 0.2s ease',
          }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--bg)'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)'; }}
          >
            GitHub
          </a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" style={{
            padding: '0.75rem 2rem', border: '1px solid var(--border)', color: 'var(--text-muted)',
            fontFamily: 'DM Mono, monospace', fontSize: '0.8rem', letterSpacing: '0.1em',
            textDecoration: 'none', transition: 'all 0.2s ease',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-muted)'; }}
          >
            LinkedIn
          </a>
        </div>
      </div>
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </section>
  );
}
