import React from 'react'
import { Wrapped, Title, Date, Item, Span, Rate, Flex } from './styles'

const renderItem = (item) => {
  const { key, date, rates } = item
  return (
    <Item key={key}>
      <Date>{date}</Date>
      <Flex>
        {Object.keys(rates).map(
          item => <Rate key={item}><Span>{item} = </Span>{rates[item]}</Rate>
        )}
      </Flex>
    </Item>
  )
}

export const HistoricalPrice = ({ data }) => {
  return (
    <Wrapped>
      <Title>HISTORIC PRICE</Title>
      {data.map(renderItem)}
    </Wrapped>
  )
}
