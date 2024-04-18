import React from "react";

import {
	FaUtensils,
	FaMapMarkerAlt,
	FaPhone,
	FaEnvelope,
} from "react-icons/fa";
import { Navbar } from "../components";
import Footer from "../container/Footer/Footer";

const About = () => {
	return (
		<div>
			<Navbar />
			<div className="bg-gray-100 py-16">
				<div className="max-w-4xl mx-auto px-4">
					<h1 className="text-4xl font-bold mb-8 text-center">
						About Our Restaurant
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-white rounded-lg shadow-md p-6">
							<h2 className="text-2xl font-semibold mb-4">Our Story</h2>
							<p className="text-gray-700">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								vitae molestie velit. Duis ut arcu vel lorem iaculis sodales.
								Phasellus vitae nisl ac nisi aliquet ullamcorper nec sit amet
								eros. Donec convallis quam at est consectetur, ut feugiat nibh
								vehicula.
							</p>
						</div>
						<div className="bg-white rounded-lg shadow-md p-6">
							<h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
							<p className="text-gray-700">
								Fusce posuere est eget dolor porttitor, non scelerisque nisi
								tincidunt. Duis imperdiet leo nec ex efficitur, sed auctor
								tortor semper. Nam scelerisque eros sit amet elit tincidunt, eu
								luctus dui molestie. Sed vitae sem ut nunc luctus bibendum.
							</p>
						</div>
					</div>
					<div className="mt-12 text-center">
						<h2 className="text-3xl font-bold mb-4">Visit Us</h2>
						<div className="flex items-center justify-center space-x-4">
							<div className="flex items-center">
								<FaMapMarkerAlt className="text-gray-500 text-xl" />
								<p className="text-gray-700">123 Main Street, Cityville, ABC</p>
							</div>
							<div className="flex items-center">
								<FaPhone className="text-gray-500 text-xl" />
								<p className="text-gray-700">123-456-7890</p>
							</div>
							<div className="flex items-center">
								<FaEnvelope className="text-gray-500 text-xl" />
								<p className="text-gray-700">info@example.com</p>
							</div>
						</div>
					</div>
					<div className="mt-12 text-center">
						<h2 className="text-3xl font-bold mb-4">Our Cuisine</h2>
						<p className="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
							molestie velit. Duis ut arcu vel lorem iaculis sodales. Phasellus
							vitae nisl ac nisi aliquet ullamcorper nec sit amet eros. Donec
							convallis quam at est consectetur, ut feugiat nibh vehicula.
						</p>
						<div className="flex justify-center mt-6">
							<FaUtensils className="text-6xl text-red-600" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
