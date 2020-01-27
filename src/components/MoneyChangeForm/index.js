import React, { useState } from 'react'
import { Form, Input, Container, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'

export const MoneyChangeForm = ({ data, onSubmit, title, error, disabled }) => {
  const eur = useInputValue(data.rates.EUR)
  const usd = useInputValue(data.rates.USD)

  const [valueUSD, setValueUSD] = useState(usd)

  const hundleSubmit = (event) => {
    event.preventDefault()
    setValueUSD({
      ...usd,
      value: eur.value * usd.value
    })
  }

  return (
    <>
      <Form onSubmit={hundleSubmit} disabled={disabled}>
        <Container>
          <Input type='number' placeholder='EUR' {...eur} disabled={disabled} />
          <Input type='number' placeholder='USD' {...valueUSD} readOnly />
        </Container>
        <SubmitButton type='submit'>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
