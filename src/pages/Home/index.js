import React, { useEffect } from 'react'
import { getLatest } from '../../services/getLatest'
import { getHistorical } from '../../services/getHistorical'
import { MoneyChangeForm } from '../../components/MoneyChangeForm'
import { HistoricalPrice } from '../../components/HistoricalPrice'
import { Fetcher } from '../../components/Fetcher'
import { Layout } from '../../components/Layout'
import { dateFormat } from '../../utils/dateFormat'

function Home () {
  const dates = {
    today: dateFormat(0),
    yesterday: dateFormat(1),
    beforeYesterday: dateFormat(2)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      getHistorical(dates)
    }, 600000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Layout>
      <Fetcher action={getLatest()} timer={0}>
        {data => <MoneyChangeForm title='CALCULATE' data={data} />}
      </Fetcher>
      <Fetcher action={getHistorical(dates)} timer={500}>
        {data => <HistoricalPrice data={data} />}
      </Fetcher>
    </Layout>
  )
}

export default Home
