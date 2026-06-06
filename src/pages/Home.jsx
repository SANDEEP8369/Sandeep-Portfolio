import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ROLES = ['Java Backend Developer', 'Spring Boot Engineer', 'Microservices Architect', 'Api Integrations'];

const STATS = [
  { value: '3+', label: 'Yrs Experience' },
  { value: '12', label: 'Projects' },
  { value: '100K+', label: 'Lines of Java' },

];

export default function Hero() {

  const navigate = useNavigate();
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timer;

    if (!deleting && typed.length < current.length) {
      timer = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 75);
    } else if (!deleting && typed.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && typed.length > 0) {
      timer = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 40);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [typed, deleting, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(108, 99, 255, ${0.12 * (1 - d / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="about">
      <div className="bg-grid" />
      <canvas
        ref={canvasRef}
        className="particle-canvas"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-grid">
          {/* LEFT */}
          <div>
            <div className="hero-eyebrow animate-fade-up">
              <span className="hero-eyebrow-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-name animate-fade-up delay-100">
              Sandeep<br />Verma
            </h1>

            <div className="hero-role animate-fade-up delay-200">
              <span style={{ color: 'var(--accent)' }}>{typed}</span>
              <span className="cursor" />
            </div>

            <p className="hero-desc animate-fade-up delay-300">
              3 years building reliable, scalable Java backends. I care about clean architecture,
              meaningful tests, and shipping things that last. Based in Mumbai, India.
            </p>

            <div className="hero-actions animate-fade-up delay-400">
              <button className="btn-primary" onClick={() => navigate("/projects")}>
                View Projects →
              </button>
              <button className="btn-secondary" onClick={() => navigate("/contact")}>
                Get in Touch
              </button>
            </div>

            <div className="hero-stats animate-fade-up delay-500">
              {STATS.map((s) => (
                <div key={s.label} className="stat-item">
                  <div className="stat-num">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Code card */}
          <div className="animate-scale-in delay-300">
            <div className="code-card">
              <div className="code-card-bar">
                <div className="code-dot" style={{ background: '#ff5f57' }} />
                <div className="code-dot" style={{ background: '#febc2e' }} />
                <div className="code-dot" style={{ background: '#28c840' }} />
                <span style={{ marginLeft: '8px', fontSize: '0.65rem', color: 'var(--text-3)' }}>SandeepVerma.java</span>
              </div>
              <div className="code-body">
                <div><span className="c-annot">@Entity</span></div>
                <div><span className="c-keyword">public class </span><span className="c-class">SandeepVerma </span><span className="c-muted">{'{'}</span></div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="c-muted">String </span><span className="c-prop">role</span>
                  <span className="c-muted"> = </span><span className="c-string">"Java Dev"</span><span className="c-muted">;</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="c-muted">int </span><span className="c-prop">experience</span>
                  <span className="c-muted"> = </span><span className="c-num">3</span><span className="c-muted">;</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="c-muted">String </span><span className="c-prop">location</span>
                  <span className="c-muted"> = </span><span className="c-string">"Mumbai, IN"</span><span className="c-muted">;</span>
                </div>
                <br />
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="c-keyword">List</span>
                  <span className="c-muted">{'<String> '}</span>
                  <span className="c-prop">stack</span>
                  <span className="c-muted"> = List.of(</span>
                </div>
                {['Java', 'Spring Boot', 'Docker', 'Kafka & RabbitMQ', 'Mysql', 'Oracle', 'React.js'].map((s, i) => (
                  <div key={s} style={{ paddingLeft: '3rem' }}>
                    <span className="c-string">"{s}"</span>
                    {i < 6 && <span className="c-muted">,</span>}
                  </div>
                ))}
                <div style={{ paddingLeft: '1.5rem' }}><span className="c-muted">);</span></div>
                <br />
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="c-annot">@Override</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="c-keyword">public </span>
                  <span className="c-class">String </span>
                  <span className="c-prop">toString</span>
                  <span className="c-muted">() {'{'}</span>
                </div>
                <div style={{ paddingLeft: '3rem' }}>
                  <span className="c-keyword">return </span>
                  <span className="c-string">"Let's build something great!"</span><span className="c-muted">;</span>
                </div>
                <div style={{ paddingLeft: '1.5rem' }}><span className="c-muted">{'}'}</span></div>
                <div><span className="c-muted">{'}'}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
