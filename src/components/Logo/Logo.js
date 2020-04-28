import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return <LogoWrapper>Productivity</LogoWrapper>
}

const LogoWrapper = styled.div`
  padding: 1rem;
  color: var(--color-white);
  font-size: 1.2rem;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;
`

export default Logo
