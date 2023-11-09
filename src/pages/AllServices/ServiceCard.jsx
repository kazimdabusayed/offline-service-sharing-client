import { Link, useParams } from "react-router-dom";

const ServiceCard = ({ service }) => {

	const ser = useParams();

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
	return (
		<div>
			<div className="">
				{/* <!-- Card --> */}
				<a
					className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
					href="#"
				>
					<div className="aspect-w-16 aspect-h-11">
						<img
							className="w-full object-cover rounded-xl"
							src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
							alt="Image Description"
						/>
					</div>
					<div className="my-6">
						<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
							{serviceName}
						</h3>
						<p className="mt-5 text-gray-600 dark:text-gray-400">
							{description}
						</p>
					</div>
					<div className="mt-auto flex items-center gap-x-3">
						<img
							className="w-8 h-8 rounded-full"
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
							alt="Image Description"
						/>
						<div>
							<h5 className="text-sm text-gray-800 dark:text-gray-200">
								By {providerName}
							</h5>
						</div>
						<Link
							to={`/services/${_id}`}
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Details
						</Link>
					</div>
				</a>
				{/* <!-- End Card --> */}
			</div>
			{/* <!-- End Grid --> */}

			{/* <!-- Card --> */}
			{/* <div className="mt-12 text-center">
				<a
					className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-500 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
					href="#"
				>
					Read more
					<svg
						className="flex-shrink-0 w-4 h-4"
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
						<path d="m9 18 6-6-6-6" />
					</svg>
				</a>
			</div> */}
		</div>
	);
};

export default ServiceCard;