import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import { projects } from '../data/resume'

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${open ? project.color : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 14,
        padding: '2rem',
        cursor: 'pointer',
        transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
        transform: open ? 'translateY(-4px)' : 'none',
        boxShadow: open ? `0 20px 56px ${project.color}1e` : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        if (!open) {
          e.currentTarget.style.borderColor = `${project.color}55`
          e.currentTarget.style.transform = 'translateY(-2px)'
        }
      }}
      onMouseLeave={e => {
        if (!open) {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
          e.currentTarget.style.transform = 'none'
        }
      }}
    >
      {/* Top colour bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${project.color}, ${project.accent})`,
      }} />

      {/* Icon + number */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
        <span style={{ fontSize: '2.2rem', lineHeight: 1 }}>{project.icon}</span>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '2.5rem',
          fontWeight: 800,
          color: `${project.color}22`,
          lineHeight: 1,
          letterSpacing: '-1px',
        }}>
          {String(project.id).padStart(2, '0')}
        </span>
      </div>

      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '1.1rem',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '0.7rem',
        lineHeight: 1.3,
      }}>
        {project.title}
      </h3>

      {/* Stack tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
        {project.stack.map(t => (
          <span key={t} style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.68rem',
            color: project.color,
            background: `${project.color}14`,
            border: `1px solid ${project.color}30`,
            padding: '0.22rem 0.65rem',
            borderRadius: 20,
          }}>
            {t}
          </span>
        ))}
      </div>

      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.48)',
        lineHeight: 1.75,
        marginBottom: open ? '1.5rem' : 0,
      }}>
        {project.description}
      </p>

      {/* Expanded content */}
      {open && (
        <>
          <div style={{
            height: 1,
            background: `${project.color}22`,
            marginBottom: '1.4rem',
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
            {project.points.map((pt, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 5, height: 5,
                  borderRadius: '50%',
                  background: project.color,
                  flexShrink: 0,
                  marginTop: '0.58rem',
                }} />
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.58)',
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {pt}
                </p>
              </div>
            ))}
          </div>
          {/* Impact badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: `${project.color}14`,
            border: `1px solid ${project.color}30`,
            borderRadius: 30,
            padding: '0.4rem 1rem',
          }}>
            <span style={{ fontSize: '0.8rem' }}>⚡</span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              color: project.color,
              letterSpacing: '0.05em',
            }}>
              {project.impact}
            </span>
          </div>
        </>
      )}

      {/* Expand hint */}
      {!open && (
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.72rem',
          color: `${project.color}66`,
          letterSpacing: '0.08em',
          marginTop: '1rem',
          textTransform: 'uppercase',
        }}>
          Click to expand →
        </p>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <PageWrapper>
      <section className="section-wrapper">

        <p className="section-label">Portfolio</p>
        <h1 className="section-heading" style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
          marginBottom: '1rem',
        }}>
          Things I've Built
        </h1>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '4rem',
          maxWidth: 520,
        }}>
          5 enterprise projects across GST compliance, Government API integrations, and FinTech platforms.
          Click any card to see full details.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
