import React from 'react';

const Banner = () => {
    return (
		// <section className="dark:bg-gray-800 dark:text-gray-100">
		// 	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		// 		<h1 className="text-4xl font-bold leadi sm:text-5xl">
		// 			Quisquam necessita vel{" "}
		// 			<span className="dark:text-violet-400">
		// 				laborum doloribus
		// 			</span>
		// 			delectus
		// 		</h1>
		// 		<p className="px-8 mt-8 mb-12 text-lg">
		// 			Cupiditate minima voluptate temporibus quia? Architecto
		// 			beatae esse ab amet vero eaque explicabo!
		// 		</p>
		// 		<div className="flex flex-wrap justify-center">
		// 			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
		// 				Get started
		// 			</button>
		// 			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
		// 				Learn more
		// 			</button>
		// 		</div>
		// 	</div>
		// </section>

		<section className="relative  bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
			<div className="absolute inset-0 bg-gradient-to-r dark:from-slate-400 from-white/95 to-white/25 ltr:bg-gradient-to-r rtl:bg-gradient-to-l"></div>

			<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
				<div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
					<h1 className="text-3xl font-extrabold sm:text-5xl">
						Let us find your
						<strong className="block font-extrabold text-blue-700">
							Forever Home.
						</strong>
					</h1>

					<p className="mt-4 max-w-lg sm:text-xl/relaxed">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>

					<div className="mt-8 flex flex-wrap gap-4 text-center">
						<a
							href="#"
							className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
						>
							Get Started
						</a>

						<a
							href="#"
							className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;