import { useState } from 'react'

export default function Foto({ src, alt, legenda, className = '', prioridade = false }) {
  const [falhou, setFalhou] = useState(false)

  if (falhou) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center border border-dashed border-rosa/40 bg-foto p-6 text-center text-[13px] leading-relaxed text-[#8a5a5a] ${className}`}
      >
        <span>{legenda || alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={prioridade ? 'eager' : 'lazy'}
      onError={() => setFalhou(true)}
      className={`object-cover ${className}`}
    />
  )
}