
import { NavMobMenu, NavTag, NavHeader, NavWrapper, AuthWrapper, ModalBtn, TabletWrapper } from "./Navigation.styled";
import  {ReactComponent as BurgerBtn }  from "../../../icons/burger.svg"
import { ReactComponent as CloseBtn } from "../../../icons/close.svg"
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Nav } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";
import { AuthNav } from "../AuthNav/AuthNav";
import { useSelector } from 'react-redux';
import {isAuth, getToken} from "../../../redux/auth/selectors"


export const Navigation = () => {

  const { isLoggedIn } = useSelector(isAuth);
    // const { token } = useSelector(getToken);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({  query: '(min-width: 1280px)' });

    const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <> 
  <NavHeader> 
    {isDesktop ? (<NavWrapper> <Nav setIsMenuOpen={setIsMenuOpen}/></NavWrapper>) : ""} 
      
    {!isMenuOpen ? (isTablet && (
      <TabletWrapper>

            {/* <UserNav setIsMenuOpen={setIsMenuOpen} /> */}
            {/* <AuthNav setIsMenuOpen={setIsMenuOpen} /> */}
             {isLoggedIn ?  <UserNav setIsMenuOpen={setIsMenuOpen} /> :  <AuthNav setIsMenuOpen={setIsMenuOpen} />}
       
      </TabletWrapper>)) : ("") }
  </NavHeader>
      
    <ModalBtn>
        {isMenuOpen ? (
          <CloseBtn size="40" onClick={toggleMenu} />) :
          (<BurgerBtn size="40" onClick={toggleMenu} />)}
    </ModalBtn>
     
    
    <NavMobMenu menuToggle={isMenuOpen}>
    <NavTag> 
    <NavWrapper>
      <Nav setIsMenuOpen={setIsMenuOpen}/>
    </NavWrapper>
      
      <AuthWrapper> 
        {/* <UserNav setIsMenuOpen={setIsMenuOpen} /> */}
        {/* <AuthNav setIsMenuOpen={setIsMenuOpen} /> */}
     {isLoggedIn ?  <UserNav setIsMenuOpen={setIsMenuOpen} /> :  <AuthNav setIsMenuOpen={setIsMenuOpen} />}
   </AuthWrapper> 
      </NavTag>
    </NavMobMenu>
     
  </>
  );

 
};

