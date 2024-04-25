import classNames from 'classnames';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Container, Navbar} from 'react-bootstrap';
import handleNavbarTransparency from 'helpers/handleNavbarTransparency';
import LandingRightSideNavItem from './LandingRightSideNavItem';
import {topNavbarBreakpoint} from 'config';
import SearchBox from "../../components/navbar/top/SearchBox";
import "./styles.css"
import Logo from 'components/common/Logo';

const NavbarStandard = ({OpenAuth}) => {

	useEffect(() => {
		window.addEventListener('scroll', handleNavbarTransparency);
		return () => window.removeEventListener('scroll', handleNavbarTransparency);
	}, []);

	return (
		<Navbar
			variant={'light'}
			expand={topNavbarBreakpoint}
			fixed={"top"}
			className={classNames('i3 bg-light navbar-wrapper navbar-standard navbar-theme')}
		>
			<Container className='i1' fluid={true}>
				<Navbar.Brand as={Link} to="/" className={"ms-3 mb-2"}>
					<Logo/>
				</Navbar.Brand>
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
					{/* <label className='o74 o78'>
            Deconnecter
          </label> */}
					{/* //the scroll down */}
					<div className='p1'>
						<div className='box'>
							<a href={"#!"}>Produits</a>
							<a href={"#!"}>Meilleur produits</a>
							<a href={"#!"}>Meilleur promo</a>
							{/* <a>Panier</a> */}
						</div>

					</div>

				</Navbar.Collapse>

        <LandingRightSideNavItem onClick={OpenAuth}/>
			</Container>
			{/* <CategoryBar /> */}
		</Navbar>
	);
};

export default NavbarStandard;
