export const normalizeDates = (...dates) => {
  const arrDates = [...dates]
  const rates = arrDates.map(item => ({
    key: item.timestamp,
    date: item.date,
    rates: {
      USD: item.rates.USD,
      EUR: item.rates.EUR,
      GBP: item.rates.GBP,
      AUD: item.rates.AUD
    }
  }))
  return rates
}
