import PageWrapper from '../components/PageWrapper'
import { personal } from '../data/resume'

const contactItems = [

  {
    label: 'WhatsApp',
    value: "",
    href: personal.whatsApp,
    icon: '📲',
    color: '#0c9655',
    hint: 'Drop me an message anytime',
  },
  {
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    icon: '📱',
    color: '#A78BFA',
    hint: 'Available Mon–Sat, 10am–7pm IST',
  },
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: '✉️',
    color: '#00D4AA',
    hint: 'Drop me an email anytime',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sandeep-verma',
    href: personal.linkedin,
    icon: '💼',
    color: '#06B6D4',
    hint: 'Connect professionally',
  },
  {
    label: 'GitHub',
    value: 'github.com/SANDEEP8369',
    href: personal.github,
    icon: '💼',
    color: '#06B6D4',
    hint: 'Connect professionally',
  },
  {
    label: 'Location',
    value: personal.location,
    href: '#',
    icon: '📍',
    color: '#F59E0B',
    hint: 'Open to remote & on-site',
  },
]

export default function Contact() {
  return (
    <PageWrapper>
      <section className="section-wrapper" style={{ textAlign: 'center' }}>

        {/* Glow */}
        <div className="blob" style={{
          top: '20%', left: '50%',
          transform: 'translateX(-50%)',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(0,212,170,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ display: 'inline-block' }}>Contact</p>
          <h1 className="section-heading" style={{
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            marginBottom: '1.5rem',
            marginTop: '0.5rem',
          }}>
            Let's Work<br />
            <span className="gradient-text">Together</span>
          </h1>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.42)',
            maxWidth: 480,
            margin: '0 auto 4rem',
            lineHeight: 1.85,
          }}>
            Open to full-time roles, freelance projects, or just a chat about
            Java, FinTech, and backend architecture.
          </p>

          {/* Contact cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.2rem',
            maxWidth: 900,
            margin: '0 auto 5rem',
            textAlign: 'left',
          }}>
            {contactItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${item.color}30`,
                  borderRadius: 14,
                  padding: '1.8rem',
                  display: 'block',
                  transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${item.color}0e`
                  e.currentTarget.style.borderColor = item.color
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                  e.currentTarget.style.borderColor = `${item.color}30`
                  e.currentTarget.style.transform = 'none'
                }}
              >
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '1rem' }}>
                  {item.icon}
                </span>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: item.color,
                  marginBottom: '0.4rem',
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.88rem',
                  color: '#fff',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  wordBreak: 'break-all',
                }}>
                  {item.value}
                </p>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.32)',
                }}>
                  {item.hint}
                </p>
              </a>
            ))}
          </div>

          {/* CTA email button */}
          <a
            href={`mailto:${personal.email}`}
            className="btn-primary"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              padding: '1rem 3rem',
              fontSize: '0.9rem',
            }}
          >
            Send Me an Email ↗
          </a>
        </div>
      </section>
    </PageWrapper>
  )
}
