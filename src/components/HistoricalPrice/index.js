import React from 'react'
import { Container, Title, Date, Item, Span, Rate, Flex } from './styles'

const renderItem = (item) => {
  const { key, date, rates } = item
  return (
    <Item key={key}>
      <Date>{date}</Date>
      <Flex>
        {Object.keys(rates).map(
          item => <Rate key={Rate}><Span>{item} </Span>{rates[item]}</Rate>
        )}
      </Flex>
    </Item>
  )
}

export const HistoricalPrice = ({ data }) => {
  return (
    <Container>
      <Title>HISTORIC PRICE</Title>
      {data.map(renderItem)}
    </Container>
  )
}
