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
export const ContainerForm = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%
  }
`
export const Error = styled.span`
  color: red;
  font-size: 14px;
`
