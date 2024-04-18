import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight, FaUtensils } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlidePage.css";
import Image from "next/image";


export default function SlidePage() {
	const CustomPrevArrow = (props) => {
		const { onClick } = props;
		return <FaAngleLeft className="custom-prev-arrow" onClick={onClick} />;
	};

	const CustomNextArrow = (props) => {
		const { onClick } = props;
		return <FaAngleRight className="custom-next-arrow" onClick={onClick} />;
	};

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
	};

	return (
		<div className="slide-container hidden md:block">
			<Slider {...settings}>
				<div className="slide-item">
					<Image src="/slide_1.jpg" alt="Slide 1" />
					<div className="text-overlay">
						<h2 className="text-3xl font-bold mb-4">Delicious Food</h2>
						<p className="text-lg text-gray-800">
							Explore our delicious and diverse menu offerings.
						</p>
						<button className="mt-4 px-6 py-2  bg-red-500 text-white rounded-md">
							<span className="flex">
								Discover Menu <FaUtensils className=" ms-1 mt-1" />
							</span>
						</button>
					</div>
				</div>
				<div className="slide-item">
					<Image src="/slide_2.jpg" alt="Slide 2" />
					<div className="text-overlay">
						<h2 className="text-3xl font-bold mb-4">
							Exquisite Dining Experience
						</h2>
						<p className="text-lg text-gray-800">
							Indulge in an exquisite dining experience with us.
						</p>
						<button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md">
							<span className="flex">
								Book a Table <FaUtensils className=" ms-1 mt-1" />
							</span>
						</button>
					</div>
				</div>
				<div className="slide-item">
					<Image src="/slide_3.jpg" alt="Slide 3" />
					<div className="text-overlay">
						<h2 className="text-3xl font-bold mb-4">Special Events Catering</h2>
						<p className="text-lg ">
							Let us cater your special events with our delicious dishes.
						</p>
						<button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md">
							<span className="flex">
								Plan Event <FaUtensils className=" ms-1 mt-1" />
							</span>
						</button>
					</div>
				</div>
				<div className="slide-item">
					<Image src="/slide_4.jpg" alt="Slide 4" />
					<div className="text-overlay">
						<h2 className="text-3xl font-bold mb-4">Relaxing Ambiance</h2>
						<p className="text-lg text-gray-800">
							Enjoy a relaxing ambiance and exceptional service.
						</p>
						<button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md">
							<span className="flex">
								Visit Us <FaUtensils className=" ms-1 mt-1" />
							</span>
						</button>
					</div>
				</div>
			</Slider>
		</div>
	);
}
