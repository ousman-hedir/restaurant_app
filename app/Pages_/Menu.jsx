import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import {
	faCoffee,
	faUtensils,
	faHamburger,
	faPizzaSlice,
	faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import Img1 from "./menu/menu_1.jpg";
import Img2 from "./menu/menu_2.jpg";
import Img3 from "./menu/menu_3.jpg";
import Img4 from "./menu/menu_4.jpg";
import Img5 from "./menu/menu_5.jpg";
import Img6 from "./menu/menu_6.jpg";
import Img7 from "./menu/menu_7.jpg";
import Img8 from "./menu/menu_8.jpg";
import Img9 from "./menu/menu_9.jpg";
import Img10 from "./menu/menu_10.jpg";
import Img11 from "./menu/menu_11.jpg";
import Img12 from "./menu/menu_12.jpg";
import Img13 from "./menu/menu_13.jpg";
import Img14 from "./menu/menu_14.jpg";
import MenuSlide from "./menu/MenuSlide";
import { Navbar } from "../components";
import Footer from "../container/Footer/Footer";

function Menu() {
	const [filter, setFilter] = useState("all");

	const handleFilterChange = (type) => {
		setFilter(type);
	};

	const menuItems = [
		{
			type: "breakfast",
			name: "Cupcake Recipes",
			price: "$20.00",
			icon: faCoffee,
			image: Img1,
			specifications: [
				"Juice Fruit",

				"Vegetable",
				"Milk",
				"Potato",
				"Tomato",
				"Chilli",
				"Sesame",
			],
		},
		{
			type: "lunch",
			name: "Special Lunch",
			price: "$15.00",
			icon: faUtensils,
			image: Img2,
			specifications: ["Salad", "Burger", "French Fries", "Soda", "Dessert"],
		},
		{
			type: "dinner",
			name: "Pizza Dinner",
			price: "$25.00",
			icon: faPizzaSlice,
			image: Img3,
			specifications: ["Pizza", "Garlic Bread", "Pasta", "Wine", "Tiramisu"],
		},
		{
			type: "coffee",
			name: "Hot Coffee",
			price: "$5.00",
			icon: faMugHot,
			image: Img4,
			specifications: ["Espresso", "Latte", "Cappuccino", "Americano", "Mocha"],
		},
		{
			type: "hamburger",
			name: "Special Hamburger",
			price: "$10.00",
			icon: faHamburger,
			image: Img5,
			specifications: ["Beef", "Cheese", "Lettuce", "Tomato", "Onion"],
		},
		{
			type: "dinner",
			name: "Italian Dinner",
			price: "$30.00",
			icon: faPizzaSlice,
			image: Img6,
			specifications: [
				"Pasta",
				"Garlic Bread",
				"Caprese Salad",
				"Wine",
				"Tiramisu",
			],
		},
		{
			type: "coffee",
			name: "Iced Coffee",
			price: "$6.00",
			icon: faMugHot,
			image: Img7,
			specifications: ["Iced Espresso", "Iced Latte", "Iced Mocha"],
		},
		{
			type: "breakfast",
			name: "Healthy Breakfast",
			price: "$18.00",
			icon: faCoffee,
			image: Img8,
			specifications: [
				"Smoothie",
				"Avocado Toast",
				"Granola",
				"Fruit Salad",
				"Yogurt",
			],
		},
		{
			type: "lunch",
			name: "Vegan Lunch",
			price: "$12.00",
			icon: faUtensils,
			image: Img9,
			specifications: ["Tofu Salad", "Quinoa Bowl", "Vegan Wrap", "Smoothie"],
		},
		{
			type: "dinner",
			name: "Seafood Dinner",
			price: "$35.00",
			icon: faPizzaSlice,
			image: Img10,
			specifications: [
				"Grilled Salmon",
				"Shrimp Scampi",
				"Clam Chowder",
				"Wine",
			],
		},
		{
			type: "coffee",
			name: "Specialty Coffee",
			price: "$7.00",
			icon: faMugHot,
			image: Img11,
			specifications: ["Pour Over", "Cold Brew", "Nitro Cold Brew"],
		},
		{
			type: "breakfast",
			name: "Eggs Benedict",
			price: "$22.00",
			icon: faCoffee,
			image: Img12,
			specifications: [
				"Poached Eggs",
				"Canadian Bacon",
				"English Muffin",
				"Hollandaise Sauce",
			],
		},
		{
			type: "lunch",
			name: "Chicken Sandwich",
			price: "$14.00",
			icon: faUtensils,
			image: Img13,
			specifications: ["Grilled Chicken", "Lettuce", "Tomato", "Mayonnaise"],
		},
		{
			type: "dinner",
			name: "Steak Dinner",
			price: "$40.00",
			icon: faPizzaSlice,
			image: Img14,
			specifications: ["Filet Mignon", "Mashed Potatoes", "Asparagus", "Wine"],
		},
	];

	// Get unique menu types
	const menuTypes = Array.from(new Set(menuItems.map((item) => item.type)));

	return (
		<>
			<Navbar />
			<section className="bg-black pt-40 text-white">
				<div className="container mx-auto">
					<div className="text-center mb-20">
						<h2 className="text-3xl italic font-bold">Menus</h2>
						<h1 className="text-5xl font-semibold">TODAY’S SPECIALS</h1>
					</div>
				</div>
				{/* promotion  */}
				<div className="flex items-center justify-center md:justify-between px-4  bg-[white] pb-10 ">
					<div className="hidden md:block md:w-2/3 mb-4 md:mb-0  me-2">
						<MenuSlide />
					</div>
					<div className="md:w-1/3  md:h-[400px] md:mt-8 flex-col items-center bg-[#ecebeb] rounded-lg text-black shadow-lg overflow-hidden justify-between mt-3">
						<div className="md:pt-20 p-6 ">
							<h1 className="text-3xl font-bold mb-4">
								Unleash Your Taste Buds
							</h1>
							<p className="text-lg mb-4">
								Discover an explosion of flavors with our exclusive menu!
							</p>
							<p className="text-sm text-gray-600">Limited Time Offer</p>
							<button className="bg-yellow-500 text-white p-4 rounded-lg  my-5">
								Order Now
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-black py-8">
				<div className=" mx-auto">
					<div className="text-center mb-20">
						<h2 className="text-4xl font-bold">Delicious</h2>
						<h3 className="text-2xl font-semibold">Today’s menu</h3>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="md:flex justify-center mb-8 hidden ">
								<ul className="flex">
									<li
										className={`px-4 py-2 border rounded-xl me-1 cursor-pointer ${
											filter === "all"
												? "bg-[orange] text-white"
												: "bg-white text-gray-800 border-gray-400"
										}`}
										onClick={() => handleFilterChange("all")}
									>
										All
									</li>
									{menuTypes.map((type) => (
										<li
											key={type}
											className={`px-4 py-2 border rounded-xl mx-1 cursor-pointer ${
												filter === type
													? "bg-[orange] text-black"
													: "bg-white text-gray-800 border-gray-400"
											}`}
											onClick={() => handleFilterChange(type)}
										>
											{type.charAt(0).toUpperCase() + type.slice(1)}
										</li>
									))}
								</ul>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mx-3 ">
								{menuItems.map(
									(item, index) =>
										(filter === "all" || filter === item.type) && (
											<div
												key={index}
												className="bg-white rounded-lg shadow-lg overflow-hidden flex md:flex-col"
											>
												<div className="flex justify-center">
													<img
														src={item.image}
														alt={item.name}
														className="md:w-full  h-auto md:h-64 object-cover object-center"
													/>
												</div>
												<div className="p-4">
													<div className="flex items-center mb-2">
														<FontAwesomeIcon
															icon={item.icon}
															className="text-[orange] mr-2"
														/>

														<h3 className="text-lg font-semibold flex justify-between">
															<span className="font-bold">{item.name}</span>
															<span className="ms-5 font-extrabold">
																{item.price}
															</span>
														</h3>
													</div>
													<ul className="text-sm">
														{item.specifications.map((spec, idx) => (
															<li key={idx} className="flex items-center mb-1">
																<FontAwesomeIcon
																	icon={faCircleSolid}
																	className="text-[orange] mr-1"
																/>
																{spec}
															</li>
														))}
													</ul>
												</div>
											</div>
										)
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Menu;
