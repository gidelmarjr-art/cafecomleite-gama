// Texto com *palavras* em negrito itálico, como no PDF. Quebra de linha com \n.
export default function Rich({ text = '' }) {
  return text.split('\n').map((line, li, arr) => (
    <span key={li}>
      {line.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.length > 2 && part.startsWith('*') && part.endsWith('*') ? <em key={i}>{part.slice(1, -1)}</em> : part,
      )}
      {li < arr.length - 1 && <br />}
    </span>
  ))
}
