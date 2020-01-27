import React from 'react'
import { Container, Header, Image, FlexItem, Link } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export function Layout ({ cover = DEFAULT_IMAGE, children }) {
  return (
    <Container>
      <Header>
        <div>
          <Image src={cover} />
        </div>
        <FlexItem>
          <Link href='!#'>Item 1</Link>
          <Link href='!#'>Item 2</Link>
          <Link href='!#'>Item 3</Link>
          <Link href='!#'>Item 4</Link>
        </FlexItem>
      </Header>
      <div>{children}</div>
    </Container>
  )
}
