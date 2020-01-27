import { apiKey } from '../config/apiKey'
import { normalizeDates } from '../schemas/normalizeDates'

async function loadHistorical (date) {
  const response = await window.fetch(`http://data.fixer.io/api/${date}?access_key=${apiKey}`)
  const jsonData = response.json()
  if (!response.ok) {
    throw new Error(jsonData, response.statusCode)
  }
  return jsonData
}

export const getHistorical = async ({ today, yesterday, beforeYesterday }) => {
  const [dateOne, dateTwo, dateThird] = await Promise.all([loadHistorical(today), loadHistorical(yesterday), loadHistorical(beforeYesterday)])
  return normalizeDates(dateOne, dateTwo, dateThird)
}
