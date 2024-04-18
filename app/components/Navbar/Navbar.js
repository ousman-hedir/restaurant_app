"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
	
	const [toggleMenu, setToggleMenu] = React.useState(false);
	
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<Image src="/gericht.png" alt="app__logo" width={100} height={100} />
			</div>
			<ul className="app__navbar-links">
				<li className="p__opensans">
					<Link href="/">Home</Link>
				</li>
				<li className="p__opensans">
					<Link href="/about">About</Link>
				</li>
				<li className="p__opensans">
					<Link href="/menu">Menu</Link>
				</li>
				<li>
					<Link href="/order" className="p__opensans">
						Order Us
					</Link>
				</li>
				<li className="p__opensans">
					<Link href="/awards">Awards</Link>
				</li>
				<li className="p__opensans">
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
			<div className="app__navbar-login">
				<span className="p__opensans">Well Come</span>
				{/* <Link href="/login" className="p__opensans">
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
								<Link href="/" onClick={() => setToggleMenu(false)}>
									Home
								</Link>
							</li>
							<li>
								<Link href="/about" onClick={() => setToggleMenu(false)}>
									About
								</Link>
							</li>
							<li>
								<Link href="/menu" onClick={() => setToggleMenu(false)}>
									Menu
								</Link>
							</li>
							<li>
								<Link href="/awards" onClick={() => setToggleMenu(false)}>
									Awards
								</Link>
							</li>
							<li>
								<Link href="/contact" onClick={() => setToggleMenu(false)}>
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
