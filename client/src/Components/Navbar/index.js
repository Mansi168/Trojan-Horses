import React,{useEffect, useState}  from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, Navitem, NavLinks,NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
//     const [scrollNav,setScrollNav]= useState(false)
//  const changeNav=()=>{
//   if(window.scrollY>= 80){
//     setScrollNav(true)
//   }else{
//     setScrollNav(false)
//   }
//  }
//  useEffect(()=>{
//   window.addEventListener('scroll',changeNav)
//  },[])
  return (
    <>
      <Nav >
        <NavbarContainer>
            <NavLogo to='/'>Bloggy's</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <Navitem>
                    <NavLinks to='home'>Home</NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks to='about'>About</NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks to='blogs'>Blogs</NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks to='signup'>Sign Up</NavLinks>
                </Navitem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
