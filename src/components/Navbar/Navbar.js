import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo/Logo'
import Container from '../../hoc/layout/elements/Container'

const Navbar = () => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <nav>
            <ul>
              <li>Lorem.</li>
              <li>Ut!</li>
              <li>At?</li>
              <li>At?</li>
              <li>At?</li>
              <li>At?</li>
            </ul>
          </nav>
        </Wrapper>
      </Container>
    </FixedWrapper>
  )
}

const FixedWrapper = styled.div`
  position: fixed;
  background-color: var(--color-main);
  padding: 0 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`

export default Navbar
