import styled from 'styled-components'

export const Form = styled.form`
  align-items: center;
  background-color: #dadfe3;
  /* box-shadow: inset 0px 3px 9px -1px rgba(0,0,0,0.51); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 0 35px;
`
export const Container = styled.div`
  display: flex;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  &[disabled] {
    opacity: .3;
  }
`
export const Error = styled.span`
  color: red;
  font-size: 14px;
`
