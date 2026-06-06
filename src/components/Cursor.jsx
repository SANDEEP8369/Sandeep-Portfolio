import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`
      }
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 14}px, ${ringY - 14}px)`
      }
      raf = requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const base = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 9999,
    borderRadius: '50%',
    mixBlendMode: 'difference',
  }

  return (
    <>
      {/* dot */}
      <div ref={dotRef} style={{
        ...base,
        width: 8,
        height: 8,
        background: '#6c63ff',
      }} />
      {/* ring */}
      <div ref={ringRef} style={{
        ...base,
        width: 36,
        height: 36,
        border: '1.5px solid rgba(108, 99, 255, 0.6)',
      }} />
    </>
  )
}
