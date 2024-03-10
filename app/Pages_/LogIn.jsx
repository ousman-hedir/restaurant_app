import { useState, useEffect } from "react";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { FcGoogle } from "react-icons/fc";
import { useConvexAuth } from "convex/react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../container/Footer/Footer";
// import { Id } from "../../convex/_generated/dataModel";

function LogIn() {
	const { isAuthenticated } = useConvexAuth();
	const [isSignUp, setIsSignUp] = useState(true);

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// Define setUserId to update the user ID state
	const [userId, setUserId] = useState(null);

	const storeUser = useMutation(api.users.store);

	useEffect(() => {
		if (!isAuthenticated) {
			return;
		}
		async function createUser() {
			try {
				const id = await storeUser({
					firstName: formData.firstName,
					lastName: formData.lastName,
					email: formData.email,
				});
				setUserId(id);
			} catch (error) {
				console.error("Error storing user:", error);
			}
		}
		createUser();
		// Clean up effect
		return () => {
			setUserId(null);
		};
	}, [isAuthenticated, storeUser, formData]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Validate form data
		let formValid = true;
		const newErrors = {};

		// Validation code...

		setErrors(newErrors);

		if (formValid) {
			setIsButtonDisabled(true);
			try {
				// Call the storeUser mutation to save user data
				const id = await storeUser({
					firstName: formData.firstName,
					lastName: formData.lastName,
				
				});
				setUserId(id);
				// Reset form data and errors after successful submission
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					password: "",
					confirmPassword: "",
				});
				setErrors({});
				console.log("User stored with ID:", id);
			} catch (error) {
				console.error("Error storing user:", error);
				// Handle error, e.g., display error message to the user
			} finally {
				setIsButtonDisabled(false);
			}
		}
	};

	const toggleForm = () => {
		setIsSignUp(!isSignUp);
	};

	return (
		<>
		<Navbar/>
			<section className="bg-white pt-20">
				<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
					<aside className="relative block h-16 lg:order-last lg:col-span-3 lg:h-full xl:col-span-3">
						<img
							alt=""
							src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</aside>
					{/* forms */}
					<main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-9 lg:px-16 lg:py-12 xl:col-span-9">
						<div className="max-w-xl lg:max-w-3xl">
							<h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
								Welcome to Squid 🦑
							</h1>

							{isSignUp ? (
								<>
									<div className="mt-5">
										<div className="mt-5">
											<div className="flex items-center mb-4">
												<SignUpButton mode="modal">
													<button className="flex bg-slate-300 px-5 py-2 items-center rounded-lg">
														<FcGoogle className="w-6 h-6 text-blue-600 mr-2" />
														<span className="text-lg font-semibold text-gray-700">
															Sign up with Google
														</span>
													</button>
												</SignUpButton>
											</div>
										</div>
									</div>

									<form
										onSubmit={handleSubmit}
										className="mt-8 grid grid-cols-6 gap-6 transition-all duration-500 ease-in-out transform"
									>
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="firstName"
												className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
											>
												<input
													type="text"
													id="firstName"
													name="firstName"
													value={formData.firstName}
													onChange={handleChange}
													className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
													placeholder="First Name"
												/>

												<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
													First Name
												</span>
											</label>
											<p className="text-red-500 text-xs mt-1">
												{errors.firstName}
											</p>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="lastName"
												className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
											>
												<input
													type="text"
													id="lastName"
													name="lastName"
													value={formData.lastName}
													onChange={handleChange}
													className="  p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
													placeholder="Last Name"
												/>

												<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
													Last Name
												</span>
											</label>
											<p className="text-red-500 text-xs mt-1">
												{errors.lastName}
											</p>
										</div>
										<div className="col-span-6">
											<label
												htmlFor="email"
												className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
											>
												<input
													type="email"
													id="email"
													name="email"
													value={formData.email}
													onChange={handleChange}
													className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
													placeholder="Email"
												/>

												<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
													Email
												</span>
											</label>
											<p className="text-red-500 text-xs mt-1">
												{errors.email}
											</p>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="password"
												className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
											>
												<input
													type="password"
													id="password"
													name="password"
													value={formData.password}
													onChange={handleChange}
													className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
													placeholder="Password"
												/>

												<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
													Password
												</span>
											</label>
											<p className="text-red-500 text-xs mt-1">
												{errors.password}
											</p>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="confirmPassword"
												className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
											>
												<input
													type="password"
													id="confirmPassword"
													name="confirmPassword"
													value={formData.confirmPassword}
													onChange={handleChange}
													className=" p-1 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
													placeholder="Confirm Password"
												/>

												<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
													Confirm Password
												</span>
											</label>
											<p className="text-red-500 text-xs mt-1">
												{errors.confirmPassword}
											</p>
										</div>
										<div className="col-span-6">
											<label htmlFor="MarketingAccept" className="flex gap-4">
												<input
													type="checkbox"
													id="MarketingAccept"
													name="marketing_accept"
													className=" p-1 size-5 rounded-md border-gray-200 bg-white shadow-sm"
												/>

												<span className="text-sm text-gray-700">
													I want to receive emails about events, product updates
													and company announcements.
												</span>
											</label>
										</div>
										<div className="col-span-6">
											<p className="text-sm text-gray-500">
												By creating an account, you agree to our
												<a href="#" className="text-[blue] mx-1 underline">
													terms and conditions{" "}
												</a>
												and
												<a href="#" className="text-[blue] mx-1 underline">
													privacy policy{" "}
												</a>
												.
											</p>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<button
												type="submit"
												className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
												disabled={isButtonDisabled}
											>
												{isButtonDisabled ? "Submitting..." : "Sign Up"}
											</button>
										</div>
									</form>
								</>
							) : (
								<>
									<div className="mt-5">
										<SignInButton>
											<button className="flex bg-slate-300 px-5 py-2 items-center rounded-lg">
												<FcGoogle className="w-6 h-6 text-blue-600 mr-2" />
												<span className="text-lg font-semibold text-gray-700">
													Sign In with Google
												</span>
											</button>
										</SignInButton>
									</div>
									<form
										onSubmit={handleSubmit}
										className="mt-8  grid grid-cols-6 gap-6 transition-all duration-500 ease-in-out transform -translate-x-[15%] md:ms-0 ms-20 "
									>
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="email"
												className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 "
											>
												<input
													type="email"
													id="email"
													name="email"
													value={formData.email}
													onChange={handleChange}
													className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-1 "
													placeholder="Email"
												/>

												<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
													Email
												</span>
											</label>
											<p className="text-red-500 text-xs mt-1">
												{errors.email}
											</p>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="password"
												className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
											>
												<input
													type="password"
													id="password"
													name="password"
													value={formData.password}
													onChange={handleChange}
													className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-1"
													placeholder="Password"
												/>

												<span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs ">
													Password
												</span>
											</label>
											<p className="text-red-500 text-xs mt-1">
												{errors.password}
											</p>
										</div>

										<div className="col-span-6">
											<p className="text-sm text-gray-500">
												By logging in, you agree to our
												<a href="#" className="text-[blue] mx-1 underline">
													terms and conditions{" "}
												</a>
												and
												<a href="#" className="text-[blue] mx-1 underline">
													privacy policy{" "}
												</a>
												.
											</p>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<button
												type="submit"
												className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
												disabled={isButtonDisabled}
											>
												{isButtonDisabled ? "Logging in..." : "Log In"}
											</button>
										</div>
									</form>
								</>
							)}

							<p className="mt-4 text-sm text-gray-700 ">
								{isSignUp
									? "Already have an account? "
									: "Don't have an account?"}
								<button
									type="button"
									onClick={toggleForm}
									className="ml-1 font-medium text-blue-600 hover:text-blue-500"
								>
									{isSignUp ? "Log in" : "Sign up"}
								</button>
							</p>
						</div>
					</main>
				</div>
			</section>
			<Footer/>
		</>
	);
}

export default LogIn;
