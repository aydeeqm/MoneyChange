import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border: none;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  margin-top: 15px;
  width: 200px;
  text-align: center;
  &[disabled]{
    opacity: .3;
  }
`
