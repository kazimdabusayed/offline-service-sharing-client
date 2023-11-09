import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddServices = () => {
	const handleAddService = (event) => {
		event.preventDefault();
		const form = event.target;
		const serviceName = form.serviceName.value;
		const area = form.area.value;
		const price = form.price.value;
		const servicePhoto = form.servicePhoto.value;
		const providerName = form.providerName.value;
		const providerImage = form.providerImage.value;
		const description = form.description.value;

		// send data to the server
		axios
			.post("http://localhost:5000/api/v1/services", {
				serviceName,
				area,
				price,
				servicePhoto,
				providerName,
				providerImage,
				description,
			})
			.then((res) => {
				console.log(res);
				if (res.data.insertedId) {
					toast.success("Service Added Succssfully", {
						duration: 1500,
						position: "top-center",
						// Styling
						style: {},
						className: "",
						// Custom Icon
						icon: "👏",
						// Change colors of success/error/loading icon
						iconTheme: {
							primary: "#000",
							secondary: "#fff",
						},
						// Aria
						ariaProps: {
							role: "status",
							"aria-live": "polite",
						},
					});
				}
				form.reset();
			});
	};

	return (
		<section className=" bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
				<h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
					Add a new service
				</h2>
				<form onSubmit={handleAddService} className="">
					<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
						<div className="sm:col-span-2">
							<label
								htmlFor="name"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Service Name
							</label>
							<input
								type="text"
								name="serviceName"
								id="name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Type Service name"
								required=""
							/>
						</div>
						<div className="w-full">
							<label
								htmlFor="area"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Service Area
							</label>
							<input
								type="text"
								name="area"
								id="area"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Service area"
								required=""
							/>
						</div>
						<div className="w-full">
							<label
								htmlFor="price"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Service Price
							</label>
							<input
								type="number"
								name="price"
								id="price"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="$2999"
								required=""
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="photo"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Service Photo
							</label>
							<input
								type="text"
								name="servicePhoto"
								id="photo"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Service photo URL"
								required=""
							/>
						</div>
						<div>
							<label
								htmlFor="ProviderName"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Provider Name
							</label>
							<input
								type="text"
								name="providerName"
								id="ProviderName"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Type Provider Name"
								required=""
							/>
						</div>
						<div>
							<label
								htmlFor="ProviderImage"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Provider Image
							</label>
							<input
								type="text"
								name="providerImage"
								id="ProviderImage"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Provider Image URL"
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="description"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Service Description
							</label>
							<textarea
								id="description"
								name="description"
								rows="8"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Service description here"
							></textarea>
						</div>
					</div>
					<button
						type="submit"
						className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
					>
						Add Service
					</button>
				</form>
			</div>
		</section>
	);
};

export default AddServices;
