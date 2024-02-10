import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';
import handleNavbarTransparency from 'helpers/handleNavbarTransparency';
import NavbarTopDropDownMenus from 'components/navbar/top/NavbarTopDropDownMenus';
import LandingRightSideNavItem from './LandingRightSideNavItem';
import { topNavbarBreakpoint } from 'config';
import AppContext from 'context/Context';
import SearchBox from "../../components/navbar/top/SearchBox";
import "./styles.css"
import Logo from 'components/common/Logo';
const NavbarStandard = () => {
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
      variant={isDark ? 'light' : 'dark'}
      expand={topNavbarBreakpoint}
      fixed={"top"}
      className={classNames('i3 navbar-wrapper navbar-standard navbar-theme', {
        'bg-100': !navbarCollapsed && isDark,
        
        'bg-transparent': !navbarCollapsed && !isDark
      })}
    >
      <Container className='i1' fluid={true}>
        <Navbar.Brand as={Link} to="/">
        <Logo/>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Navbar.Collapse className="scrollbar">
          <Nav>
            <NavbarTopDropDownMenus setNavbarCollapsed={setNavbarCollapsed} />
          </Nav>
          <SearchBox />
          <LandingRightSideNavItem />
        </Navbar.Collapse>
      </Container>
      {/* <CategoryBar /> */}
    </Navbar>
  );
};

export default NavbarStandard;
