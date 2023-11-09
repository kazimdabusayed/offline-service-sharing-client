import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const AllServices = () => {
	// const { data: allServices, isLoading, isError } = useQuery(["allServices"], () =>
	// 	axios
	// 		.get("http://localhost:5000/api/v1/services")
	// 		.then((res) => res.data)
	// );

	const [search, setSearch] = useState('');

	const fetchServices = async () => {
		const res = await axios.get("http://localhost:5000/api/v1/services", {
			withCredentials: true,
		});
		return res.data;
	};

	const {
		data: allServices,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["allServices"],
		queryFn: async () => await fetchServices(),
	});

	if (isLoading) {
		return (
			<div className="h-screen flex flex-col bg-white dark:bg-gray-800">
				<div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
					<div className="flex justify-center">
						<div
							className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
							role="status"
							aria-label="loading"
						>
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (isError) {
		return <div>Error fetching data</div>;
	}

	return (
		<div className="bg-white dark:bg-gray-800 dark:text-gray-100">
			<div className="text-center">
				<h3 className="text-3xl text-indigo-600 ">All Services</h3>
				<h2 className="text-base my-4">
					the majority have suffered alteration in some form, by
					injected humour, or randomised <br /> words which don&apos;t
					look even slightly believable.{" "}
				</h2>

				<div className="m-auto w-screen max-w-screen-md">
					<div className="flex flex-col">
						<div className="rounded-xl border dark:border-gray-400 border-gray-200 p-6 shadow-lg">
							<form className="">
								<div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
									<svg
										className="absolute left-2 block h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<circle
											cx="11"
											cy="11"
											r="8"
											className=""
										></circle>
										<line
											x1="21"
											y1="21"
											x2="16.65"
											y2="16.65"
											className=""
										></line>
									</svg>
									<input
										onChange={(e) =>
											setSearch(e.target.value)
										}
										type="name"
										name="search"
										className="h-12 w-full cursor-text rounded-md border dark:bg-gray-600 border-gray-100 dark:border-gray-300 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
										placeholder="Search by name"
									/>
								</div>

								{/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
									<div className="flex flex-col">
										<label
											htmlFor="name"
											className="text-sm font-medium text-stone-600"
										>
											Name
										</label>
										<input
											type="text"
											id="name"
											placeholder="Raspberry juice"
											className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
										/>
									</div>

									<div className="flex flex-col">
										<label
											htmlFor="manufacturer"
											className="text-sm font-medium text-stone-600"
										>
											Manufacturer
										</label>

										<select
											id="manufacturer"
											className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
										>
											<option>Cadberry</option>
											<option>Starbucks</option>
											<option>Hilti</option>
										</select>
									</div>

									<div className="flex flex-col">
										<label
											htmlFor="date"
											className="text-sm font-medium text-stone-600"
										>
											Date of Entry
										</label>
										<input
											type="date"
											id="date"
											className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
										/>
									</div>

									<div className="flex flex-col">
										<label
											htmlFor="status"
											className="text-sm font-medium text-stone-600"
										>
											Status
										</label>

										<select
											id="status"
											className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
										>
											<option>Dispached Out</option>
											<option>In Warehouse</option>
											<option>Being Brought In</option>
										</select>
									</div>
								</div> */}

								<div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
									<button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
										Reset
									</button>
									<button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
										Search
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
				<div className="grid lg:grid-cols-2 gap-6">
					{allServices.length &&
						allServices
							.filter((service) => {
								return search.toLowerCase() === ""
									? service
									: service.serviceName
											.toLowerCase()
											.includes(search);
							})
							.map((service) => (
								<ServiceCard
									key={service._id}
									service={service}
								></ServiceCard>
							))}
				</div>
			</div>
		</div>
	);
};

export default AllServices;
