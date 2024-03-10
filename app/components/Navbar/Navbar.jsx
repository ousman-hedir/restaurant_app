import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
	
	const [toggleMenu, setToggleMenu] = React.useState(false);
	
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.gericht} alt="app__logo" />
			</div>
			<ul className="app__navbar-links">
				<li className="p__opensans">
					<Link to="/">Home</Link>
				</li>
				<li className="p__opensans">
					<Link to="/about">About</Link>
				</li>
				<li className="p__opensans">
					<Link to="/menu">Menu</Link>
				</li>
				<li>
					<Link to="/order" className="p__opensans">
						Order Us
					</Link>
				</li>
				<li className="p__opensans">
					<Link to="/awards">Awards</Link>
				</li>
				<li className="p__opensans">
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<div className="app__navbar-login">
				<span className="p__opensans">
					Well Come 
				</span>
				{/* <Link to="/login" className="p__opensans">
					<button className="bg-[blue] px-4 py-2 rounded-lg hover:bg-[orange]">
						<Authenticated>Log in</Authenticated>
						<Unauthenticated>Log out</Unauthenticated>
						<AuthLoading>Still loading</AuthLoading>
					</button>
				</Link> */}

				<div />
			</div>
			<div className="app__navbar-smallscreen">
				<GiHamburgerMenu
					color="#fff"
					fontSize={27}
					onClick={() => setToggleMenu(true)}
				/>
				{toggleMenu && (
					<div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
						<MdOutlineRestaurantMenu
							fontSize={27}
							className="overlay__close"
							onClick={() => setToggleMenu(false)}
						/>
						<ul className="app__navbar-smallscreen_links">
							<li>
								<Link to="/" onClick={() => setToggleMenu(false)}>
									Home
								</Link>
							</li>
							<li>
								<Link to="/about" onClick={() => setToggleMenu(false)}>
									About
								</Link>
							</li>
							<li>
								<Link to="/menu" onClick={() => setToggleMenu(false)}>
									Menu
								</Link>
							</li>
							<li>
								<Link to="/awards" onClick={() => setToggleMenu(false)}>
									Awards
								</Link>
							</li>
							<li>
								<Link to="/contact" onClick={() => setToggleMenu(false)}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
