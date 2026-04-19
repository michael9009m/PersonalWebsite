import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { data } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      padding: '1.25rem 2.5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: 'var(--accent)' }}>
        {data.name.split(' ')[0]}<span style={{ color: 'var(--text)' }}>.dev</span>
      </span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {links.map(link => (
          <Link
            key={link}
            to={link.toLowerCase()}
            smooth={true}
            duration={600}
            offset={-80}
            style={{ fontSize: '0.8rem', color: 'var(--text-muted)', cursor: 'none', letterSpacing: '0.1em' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}
