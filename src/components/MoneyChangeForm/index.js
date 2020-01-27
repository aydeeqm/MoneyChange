import React from 'react'
import { Form, Input, Title, Error } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'

export const MoneyChangeForm = ({ onSubmit, title, error, disabled }) => {
  const usd = useInputValue('')
  const eur = useInputValue('')

  const hundleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      usd: usd.value,
      eur: eur.value
    })
  }

  return (
    <>
      <Form onSubmit={hundleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input type='text' placeholder='EUR' {...usd} disabled={disabled} />
        <Input type='text' placeholder='USD' {...eur} disabled />
        <SubmitButton type='submit'>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
