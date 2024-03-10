import React from "react";
import Img1 from "./promotions/promo1.jpg";
import Img2 from "./promotions/promo2.jpg";
import Img3 from "./promotions/promo3.jpg";
import Img4 from "./promotions/promo4.jpg";
import Img5 from "./promotions/promo5.jpg";
import Img6 from "./promotions/promo6.jpg";
import "./promotion.css";
import { FaGlassCheers, FaThumbsUp } from "react-icons/fa";

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
		img: Img1,
		title: "Special Breakfast",
		price: 15,
	},
	{
		img: Img2,
		title: "Special Lunch",
		price: 25,
	},
	{
		img: Img3,
		title: "Special Dinner",
		price: 35,
	},
	{
		img: Img4,
		title: "Special Dinner",
		price: 35,
	},
	{
		img: Img5,
		title: "Special Dinner",
		price: 35,
	},
	{
		img: Img6,
		title: "Special Dinner",
		price: 35,
	},
];

export default Promotion;
