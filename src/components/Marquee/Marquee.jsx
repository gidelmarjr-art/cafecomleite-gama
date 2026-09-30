import './Marquee.css'
export default function Marquee({ words, reverse = false }) {
  const row = words.join(' ✦ ') + ' ✦ '
  return (
    <div className={`marquee ${reverse ? 'rev' : ''}`} aria-hidden="true">
      <div className="track"><span>{row.repeat(3)}</span><span>{row.repeat(3)}</span></div>
    </div>
  )
}
