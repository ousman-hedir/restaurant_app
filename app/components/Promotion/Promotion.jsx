import React from "react";
import { FaGlassCheers, FaThumbsUp } from "react-icons/fa";
import "./promotion.css";

function Promotion() {
	return (
		<div>
			<section className="bg-[#272424]">
				<div className="container mx-auto">
					<div className="text-center mb-10 text-white pt-5">
						<h2 className="text-5xl fon font-bold pb-2">Specials</h2>
						<h3 className="text-2xl font-serif font-semibold">
							Specials Promotion
						</h3>
					</div>
					<button className="text-black font-bold text-xl -0 text-center ms-[45%] py-2 px-6 rounded bg-[#e7f42f] hover:bg-[orange]">
						<span className="flex">
							See Menu
							<span className="ms-1 mt-1 ">
								<FaGlassCheers />
							</span>
						</span>
					</button>
					<div className="flex flex-wrap justify-center">
						{promotions.map((promo, index) => (
							<div
								key={index}
								className="max-w-sm rounded overflow-hidden shadow-lg m-4"
							>
								<img src={promo.img} alt={promo.title} className="w-full" />
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2 text-white">
										{promo.title}
									</div>
									<p className="text-white text-base">
										From
										<span className="text-[#48fa48]">Birr{promo.price}</span>
									</p>
								</div>
								<div className="px-6 pt-4 pb-2">
									<a
										href="#"
										className="inline-block bg-[#f2c522] hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
									>
										<span className="flex">
											Order now
											<span className="ms-1 mt-1">
												<FaThumbsUp />
											</span>
										</span>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

const promotions = [
	{
		img: "s/promo1.jpg",
		title: "Special Breakfast",
		price: 15,
	},
	{
		img: "/promo2.jpg",
		title: "Special Lunch",
		price: 25,
	},
	{
		img: "/promotions/promo3.jpg",
		title: "Special Dinner",
		price: 35,
	},
	{
		img: "/promo4.jpg",
		title: "Special Dinner",
		price: 35,
	},
	{
		img: "/promo5.jpg",
		title: "Special Dinner",
		price: 35,
	},
	{
		img: "/promo6.jpg",
		title: "Special Dinner",
		price: 35,
	},
];

export default Promotion;
