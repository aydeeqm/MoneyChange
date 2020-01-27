import React from 'react'
import { getLatest } from '../../services/getLatest'
import { getHistorical } from '../../services/getHistorical'
import { MoneyChangeForm } from '../../components/MoneyChangeForm'
import { HistoricalPrice } from '../../components/HistoricalPrice'
import { Fetcher } from '../../components/Fetcher'
import { dateFormat } from '../../utils/dateFormat'

function Home () {
  const dates = {
    today: dateFormat(0),
    yesterday: dateFormat(1),
    beforeYesterday: dateFormat(2)
  }
  return (
    <div>
      <Fetcher action={getLatest()}>
        {data => <MoneyChangeForm title='CALCULATE' data={data} />}
      </Fetcher>
      <Fetcher action={getHistorical(dates)}>
        {data => <HistoricalPrice data={data} />}
      </Fetcher>
    </div>
  )
}

export default Home
