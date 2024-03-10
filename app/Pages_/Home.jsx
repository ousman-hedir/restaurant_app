import React from 'react'
import { Navbar } from '../components';
import Header from '../container/Header/Header';
import AboutUs from '../container/AboutUs/AboutUs';
import SpecialMenu from '../container/Menu/SpecialMenu';
import Chef from '../container/Chef/Chef';
import Intro from '../container/Intro/Intro';
import Laurels from '../container/Laurels/Laurels';
import Gallery from '../container/Gallery/Gallery';
import FindUs from '../container/Findus/FindUs';
import Footer from '../container/Footer/Footer';
import SlidePage from '../components/SlidingPage/SlidePage';
import Promotion from '../components/Promotion/Promotion';

function Home() {
  return (
		<div>
			<Navbar />
			<SlidePage />
			<Header />
			<AboutUs />
			<SpecialMenu />
			<Promotion />
			<Chef />
			<Intro />
			<Laurels />
			<Gallery />
			<FindUs />
			<Footer />
		</div>
	);
}

export default Home