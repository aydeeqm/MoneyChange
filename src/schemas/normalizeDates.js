export const normalizeDates = (...dates) => {
  const arrDates = [...dates]
  const rates = arrDates.map(item => ({
    key: item.timestamp,
    date: new Date(item.date).toUTCString().slice(0, 16),
    rates: {
      EUR: item.rates.EUR,
      USD: item.rates.USD,
      GBP: item.rates.GBP,
      AUD: item.rates.AUD,
      CAD: item.rates.CAD,
      PLN: item.rates.PLN,
      MXN: item.rates.MXN
    }
  }))
  return rates
}
