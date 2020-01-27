import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  padding-left: 10px;
  margin: 0 25px;
  @media only screen and (max-width: 600px) {
    margin: 10px 0;
  }
`

export const Input = styled.input`
  border: transparent;
  padding: 10px 12px;
  display: block;
  font-size: 16px;
  &[disabled] {
    opacity: .3;
  };
  &:focus {
    outline: none;
  }
`
