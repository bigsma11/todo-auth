import React from 'react'
import NavItem from './NavItem/NavItem'
import styled from 'styled-components'

const NavItems = () => {
  return (
    <nav>
      <Ul>
        <NavItem link="/">main</NavItem>
        <NavItem link="todos">todos</NavItem>
        <NavItem link="#">login</NavItem>
      </Ul>
    </nav>
  )
}

// const Nav = styled.nav`
//   display: flex;
//   align-items: center;
// `

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`

export default NavItems
