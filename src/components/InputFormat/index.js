import React from 'react'
import { Container, Input } from './styles'

export function InputFormat (props) {
  const value = (props.value).toLocaleString()
  return (
    <Container>
      <span>{props.currency}</span>
      <Input
        {...props}
        type={props.type}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        value={value}
      />
    </Container>
  )
}
