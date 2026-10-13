import { motion, useReducedMotion } from 'motion/react'

export default function Revelar({ children, atraso = 0, className = '', como = 'div' }) {
  const reduzir = useReducedMotion()
  const Elemento = motion[como]

  return (
    <Elemento
      className={className}
      initial={reduzir ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: atraso, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Elemento>
  )
}