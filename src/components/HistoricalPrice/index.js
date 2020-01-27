import React from 'react'

const renderItem = (item) => {
  const { key, date, rates } = item
  return (
    <div key={key}>
      <p>{date}</p>
      <div>
        {Object.keys(rates).map(item => <p key={item}><span>{item}</span>{rates[item]}</p>)}
      </div>
    </div>
  )
}

export const HistoricalPrice = ({ data }) => {
  return (
    <div>
      {data.map(renderItem)}
    </div>
  )
}
