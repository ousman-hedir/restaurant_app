import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight, FaUtensils } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "./menu_1.jpg";
import Img2 from "./menu_2.jpg";
import Img3 from "./menu_3.jpg";
import Img4 from "./menu_4.jpg";
import "./SlidePage.css";
export default function SlidePage() {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	};

	return (
		<div className="slide-container hidden md:block">
			<Slider {...settings}>
				<div className="slide-item">
					<img src={Img1} alt="Slide 1" />
				</div>
				<div className="slide-item">
					<img
						className="w-30 h-30 object-cover object-center"
						src={Img2}
						alt="Slide 2"
					/>
				</div>
				<div className="slide-item">
					<img src={Img3} alt="Slide 3" />
				</div>
				<div className="slide-item">
					<img src={Img4} alt="Slide 4" />
				</div>
			</Slider>
		</div>
	);
}
