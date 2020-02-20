import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Container = styled.div`
padding: 30px 0;
`
export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
`

export const Image = styled.img`
  border: 1px solid #dddddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  width: 120px;
  height: 120px;
`
export const FlexItem = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 30px 15px;
`
export const Link = styled(LinkRouter)`
  background-color: #dbdbdb;
  border-radius: 5px;
  color: transparent;
  margin: 0 15px;
  padding: 6px;
  text-align: center;
  text-decoration: none;
  width: 150px;
`
