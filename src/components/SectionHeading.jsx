export default function SectionHeading({ eyebrow, title, italic, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      {eyebrow && (
        <p className="rise text-sm font-medium tracking-[0.2em] text-gold uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="rise font-display mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.01em] text-white">
        {title} {italic && <em className="text-gold italic">{italic}</em>}
      </h2>
    </div>
  )
}
