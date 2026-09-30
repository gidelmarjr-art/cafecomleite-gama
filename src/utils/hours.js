// Aberto agora? Horário de Brasília. Seg-Sáb 08h00-20h30, Dom 08h00-20h00.
export function isOpenNow(now = new Date()) {
  const d = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }))
  const mins = d.getHours() * 60 + d.getMinutes()
  const close = d.getDay() === 0 ? 20 * 60 : 20 * 60 + 30
  return mins >= 8 * 60 && mins < close
}
