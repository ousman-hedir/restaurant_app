import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";
import Image from "next/image";

const Footer = () => (
	<div className="app__footer section__padding" id="login">
		<FooterOverlay />
		<Newsletter />

		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h1 className="app__footer-headtext">Contact Us</h1>
				<p className="p__opensans"> Adama / Nazret, Ethiopia</p>
				<p className="p__opensans">+251 9 42868801</p>
				<p className="p__opensans">+251 9 42868801</p>
			</div>

			<div className="app__footer-links_logo">
				<Image src="/gericht.png" alt="footer_logo" width={100} height={100} />
				<p className="p__opensans">
					&quot;The best way to find yourself is to lose yourself in the service
					of others.&quot;
				</p>
				<Image
					src="/spoon.svg"
					width={100}
					height={100}
					className="spoon__img"
					style={{ marginTop: 15 }}
				/>
				<div className="app__footer-links_icons">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>

			<div className="app__footer-links_work">
				<h1 className="app__footer-headtext">Working Hours</h1>
				<p className="p__opensans">Monday-Friday:</p>
				<p className="p__opensans">08:00 am - 12:00 am</p>
				<p className="p__opensans">Saturday-Sunday:</p>
				<p className="p__opensans">07:00 am - 11:00 pm</p>
			</div>
		</div>

		<div className="footer__copyright">
			<p className="p__opensans">2024 Ami Cafe. All Rights reserved.</p>
		</div>
	</div>
);

export default Footer;
