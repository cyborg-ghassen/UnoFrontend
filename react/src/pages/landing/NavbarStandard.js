import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Navbar} from 'react-bootstrap';
import handleNavbarTransparency from 'helpers/handleNavbarTransparency';
import LandingRightSideNavItem from './LandingRightSideNavItem';
import { topNavbarBreakpoint } from 'config';
import AppContext from 'context/Context';
import SearchBox from "../../components/navbar/top/SearchBox";
import "./styles.css"
import Logo from 'components/common/Logo';
const NavbarStandard = ({OpenAuth}) => {
  const {
    config: { isDark }
  } = useContext(AppContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);
    return () => window.removeEventListener('scroll', handleNavbarTransparency);
  }, []);

  return (
    <Navbar
      variant={'light'}
      expand={topNavbarBreakpoint}
      fixed={"top"}
      className={classNames('i3 bg-light navbar-wrapper navbar-standard navbar-theme', {
        'bg-100': !navbarCollapsed && isDark,
        'bg-light': !navbarCollapsed && !isDark,
      })}
    >
      <Container className='i1' fluid={true} >
        <Navbar.Brand as={Link} to="/">
        <Logo/>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Navbar.Collapse className={""}>
          {/* <div className='LLLL'>Rechercher pour un produit</div> */}
          <SearchBox className={"p91"}/>
          {/* <button className='lol'>Rechercher</button>
          <div className='box'>
            <a>Produits</a>
            <a>Milleur produits</a>
            <a>Milleur promo</a>
            <a>Panier</a>
          </div> */}
          
          <LandingRightSideNavItem className='p8787' onClick={OpenAuth} />
          {/* <label className='o74 o78'>
            Deconnecter
          </label> */}
          {/* //the scroll down */}
          <div className='p1'>
          <div className='box'>
            <a>Produits</a>
            <a>Meilleur produits</a>
            <a>Meilleur promo</a>
            {/* <a>Panier</a> */}
          </div>
          <div className='LLLL'>Rechercher pour un produit</div>

          <SearchBox className={"p2"}/>
          
          <button className='lol'>Rechercher</button>
          <label className='o74 o78'>
            {/* Deconnecter */}
          </label>
          <LandingRightSideNavItem className='p8787' onClick={OpenAuth} />

          </div>
        
        </Navbar.Collapse>
      </Container>
      {/* <CategoryBar /> */}
    </Navbar>
  );
};

export default NavbarStandard;
