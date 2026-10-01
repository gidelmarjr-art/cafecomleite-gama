import './MenuBlocks.css'
import Rich from './Rich.jsx'
import Badges from './Badges.jsx'
import { img } from '../../utils/images.js'

// "R$15 / 250ml" vira duas linhas nas listas; nos cartões fica numa linha só.
function Price({ v, stack }) {
  if (!v) return null
  const [a, b] = v.split(' / ')
  if (stack && b) return <b className="price stack"><span>{a}</span><span>/ {b}</span></b>
  return <b className="price">{v}</b>
}

function Photo({ name, alt, ratio, natural }) {
  const src = img(name)
  if (!src) return null
  return (
    <div className={`photo ${natural ? 'natural' : `r-${ratio || 'wide'}`}`}>
      <img src={src} alt={alt || ''} loading="lazy" />
    </div>
  )
}

function Cards({ b }) {
  return (
    <div className={`mcards ${b.layout === 'side' ? 'side' : ''} ratio-${b.ratio || 'wide'}`} style={{ '--cols': b.cols }}>
      {b.items.map((it, i) => (
        <article className="mcard" key={it.name + i}>
          {it.img && <Photo name={it.img} alt={it.name} ratio={b.ratio === 'brunch' ? 'brunch' : b.ratio} natural={it.natural} />}
          {(it.name || it.desc || it.price || it.prices || it.bullets) && (
            <div className="mcard-body">
              {it.name && <h3>{it.name}{it.badges && <Badges list={it.badges} />}</h3>}
              {it.desc && <p className="desc">{it.desc}</p>}
              {it.bullets && <ul className="bullets">{it.bullets.map((x) => <li key={x}>{x}</li>)}</ul>}
              {it.prices && it.prices.map(([l, v], k) => (
                <p className="pline" key={k}>{l && <span>{l}</span>}<b>{v}</b></p>
              ))}
              <Price v={it.price} />
            </div>
          )}
        </article>
      ))}
    </div>
  )
}

function List({ b }) {
  return (
    <div className="mlist">
      {b.title && <h3 className="mtitle md"><Rich text={b.title} /></h3>}
      {b.sub && <p className="desc">{b.sub}</p>}
      <ul className={`mlist-items cols-${b.cols || 1} ${b.layout || ''}`}>
        {b.items.map((it) => (
          <li key={it.name}>
            <div>
              <strong>{it.name}{it.badges && <Badges list={it.badges} />}</strong>
              {it.desc && <p className="desc">{it.desc}</p>}
              {b.layout === 'stack' && <Price v={it.price} />}
              {b.layout === 'inline' && <Price v={it.price} />}
            </div>
            {!b.layout && <Price v={it.price} stack />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Block({ b }) {
  switch (b.t) {
    case 'head':
      return (
        <header className="mhead">
          <h2 className="mtitle xl"><Rich text={b.title} /></h2>
          {b.aside && <p className="aside"><Rich text={b.aside} /></p>}
          {b.items && (
            <div className="head-items">
              {b.items.map((it) => (
                <div key={it.name}>
                  <strong>{it.name}</strong>
                  {it.desc && <p className="desc">{it.desc}</p>}
                  <Price v={it.price} />
                  {it.note && <p className="desc"><Rich text={it.note} /></p>}
                </div>
              ))}
            </div>
          )}
          {b.extraNote && <p className="desc extra">{b.extraNote}</p>}
        </header>
      )
    case 'title':
      return (
        <div className={`mtitle-row ${b.line ? 'line' : ''}`}>
          <h2 className={`mtitle ${b.size || 'md'}`}><Rich text={b.text} />{b.badges && <Badges list={b.badges} />}</h2>
          {b.note && <p className="desc"><Rich text={b.note} /></p>}
          {b.right && <b className="price right">{b.right}</b>}
        </div>
      )
    case 'cards': return <Cards b={b} />
    case 'gallery':
      return (
        <div className="mgallery" style={{ gridTemplateColumns: typeof b.cols === 'number' ? `repeat(${b.cols},1fr)` : b.cols }}>
          {b.items.map((it) => <Photo key={it.img} name={it.img} alt={it.alt} ratio={b.ratio} />)}
        </div>
      )
    case 'image': return <Photo name={b.img} alt={b.alt} ratio={b.ratio} />
    case 'list': return <List b={b} />
    case 'note': return <p className={`mnote ${b.align || ''} ${b.big ? 'big' : ''}`}><Rich text={b.text} /></p>
    case 'rule': return <hr className="mrule" />
    case 'split':
      return (
        <div className="msplit" style={{ '--cols': b.cols }}>
          {b.children.map((col, i) => (
            <div className="msplit-col" key={i}>{col.map((c, k) => <Block key={k} b={c} />)}</div>
          ))}
        </div>
      )
    default: return null
  }
}
