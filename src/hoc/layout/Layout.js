import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
`

export default Layout
