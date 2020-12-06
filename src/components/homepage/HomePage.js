import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="relative h-screen bg-gray-800">
			<div className="relative pt-6 pb-16 sm:pb-24">
				<nav className="mx-3 flex justify-between">
					<div className="flex">
						<svg
							className="w-8 h-8 text-indigo-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
							/>
						</svg>
						<h2 className="text-gray-100 py-1 ml-2">TODO</h2>
					</div>
					<div className="md:hidden">
						<button>
							<svg
								className="w-8 h-8 text-gray-100"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>
					<div className="hidden space-x-10 md:flex md:ml-10 md:mr-3">
						<Link
							to="/"
							className="font-medium text-white hover:text-gray-300 py-2"
						>
							About
						</Link>
						<Link
							to="/pricing"
							className="font-medium text-white hover:text-gray-300 py-2"
						>
							Pricing
						</Link>
						<Link
							to="/signin"
							className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
						>
							Sign In
						</Link>
					</div>
				</nav>
			</div>
			<main className="mt-16 sm:mt-24">
				<div className="mx-auto max-w-7xl">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8">
						<div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto md:flex flex-col lg:col-span-6 lg:text-left lg:flex lg:items-center">
							<h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-100 sm:mt-5 sm:leading-none md:text-6xl lg:w-full lg:mt-6 lg:text-5xl xl:text-6xl">
								<span className="md:block">The tool to </span>
								<span className="text-indigo-400 md:block">
									get more done
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
						<div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
							<div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
								<div className="px-4 py-8 sm:px-10">
									<div>
										<div className="mt-2">
											<div className="mb-6 relative">
												<div className="absolute inset-0 flex items-center">
													<div className="w-full border-t border-gray-300"></div>
												</div>
												<div className="relative flex justify-center text-sm">
													<span className="px-2 bg-white text-gray-500">
														Sign Up
													</span>
												</div>
											</div>
											<form className="space-y-6">
												<div>
													<label
														htmlFor="first-name"
														className="sr-only"
													>
														First name
													</label>
													<input
														type="text"
														name="first_name"
														id="name"
														autocomplete="name"
														placeholder="First name"
														required
														className="block w-full pl-2 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  border border-gray-300 rounded-md"
													/>
												</div>
												<div>
													<label
														htmlFor="last-name"
														className="sr-only"
													>
														Last name
													</label>
													<input
														type="text"
														name="first_name"
														id="name"
														autocomplete="name"
														placeholder="Last name"
														required
														className="block w-full pl-2 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  border border-gray-300 rounded-md"
													/>
												</div>
												<div>
													<label
														htmlFor="email"
														className="sr-only"
													>
														Last name
													</label>
													<input
														type="text"
														name="email"
														id="name"
														autocomplete="email"
														placeholder="Email address"
														required
														className="block w-full pl-2 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  border border-gray-300 rounded-md"
													/>
												</div>
												<div>
													<label
														htmlFor="password"
														className="sr-only"
													>
														Last name
													</label>
													<input
														type="text"
														name="password"
														id="name"
														autocomplete="name"
														placeholder="Password"
														required
														className="block w-full pl-2 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  border border-gray-300 rounded-md"
													/>
												</div>

												<div>
													<button
														type="submit"
														className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
													>
														Create your account
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default HomePage;
