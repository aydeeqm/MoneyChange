export function dateFormat (num) {
  const date = new Date()
  date.setDate(date.getDate() - num)
  return date.toISOString().slice(0, 10)
}
