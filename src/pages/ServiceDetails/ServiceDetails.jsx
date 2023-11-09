import axios from 'axios';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const ServiceDetails = () => {

    const { user } = useContext(AuthContext);
	const email = user?.email;
    console.log(email);

	const service = useLoaderData();

	const {
		_id,
		serviceName,
		area,
		price,
		servicePhoto,
		providerName,
		providerImage,
		description,
	} = service;

	const handleAddBook = () => {
		const bookedServices = {
			serviceName,
			area,
			price,
			servicePhoto,
			providerName,
			providerImage,
		};
		// add to book
		axios
			.post("https://offline-service-sharing-server.vercel.app/api/v1/booking")
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Product Added To Cart Succssfully",
						icon: "success",
						confirmButtonText: "Ok",
					});
				}
			});
	};

    return (
		<section className="h-screen bg-white dark:bg-gray-800 dark:text-gray-100 body-font overflow-hidden ">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<img
						alt={serviceName}
						className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
						src={servicePhoto}
					/>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h1 className=" text-3xl font-medium mb-4">
							{serviceName}
						</h1>
						<div className="flex items-center mb-4">
							<img
								src={providerImage}
								alt=""
								className="w-8 h-8 rounded-xl"
							/>
							<span className="text-gray-600 ml-3">
								By {providerName}
							</span>
						</div>
						<p className="leading-relaxed">{description}</p>
						<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
							<div className="flex">
								<span className="mr-2">Area :</span>
								<button className="font-semibold">
									{area}
								</button>
							</div>
						</div>
						<div className="flex">
							<span className="title-font font-medium text-2xl ">
								{price}tk
							</span>
							<button
								onClick={email && handleAddBook}
								className="flex ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded"
							>
								Book Now
							</button>
							<button className="rounded-full w-10 h-10 bg-gray-200 hover:bg-indigo-600 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceDetails;