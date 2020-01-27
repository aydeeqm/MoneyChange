import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  display: block;
  font-size: 16px;
  margin-top: 25px;
  width: 200px;
  text-align: center;
  &[disabled]{
    opacity: .3;
  }
`
