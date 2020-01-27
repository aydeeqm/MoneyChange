import React, { useState } from 'react'
import { Form, ContainerForm, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { InputFormat } from '../InputFormat'
import { SubmitButton } from '../SubmitButton'

export const MoneyChangeForm = ({ data, title, error, disabled }) => {
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
        <ContainerForm>
          <InputFormat type='number' placeholder='EUR' currency='€' {...eur} />
          <InputFormat type='text' placeholder='USD' currency='$' {...valueUSD} readOnly />
        </ContainerForm>
        <SubmitButton type='submit'>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
