import React from 'react';
import { SidebarContainer,Icon,CloseIcon ,SidebarWrapper,SidebarLink,SidebarMenu,SideBtnWrap,SidebarRoute } from './SidebarElement';


 

 const Sidebar = ({isOpen,toggle})=>{
   return (
     <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
         <CloseIcon
                    />
       </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='home'onClick={toggle}>Home</SidebarLink> 
          <SidebarLink to='About'onClick={toggle}>About</SidebarLink>
          <SidebarLink to='blogs'onClick={toggle}>Blogs</SidebarLink>
          <SidebarLink to='signup'onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
<SidebarRoute to='/signin'>Sign In</SidebarRoute>
</SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
   );
};
 export default Sidebar;
