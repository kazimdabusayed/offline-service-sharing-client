import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddServices = () => {
	const handleAddService = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const brandName = form.brandName.value;
		// const rating = form.rating.value;
		const description = form.description.value;
		const price = form.price.value;
		// const photo = form.photo.value;

		// send data to the server
		axios
			.post("http://localhost:5000/api/v1/services", {
				name,
				brandName,
				price,
                description
			})
			.then((res) => {
				console.log(res);
				if (res.data.insertedId) {
                    toast.success("Service Added Succssfully", {
						duration:  1500,
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
    <Toaster position="top-center" />;
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
				<h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
					Add a new product
				</h2>
				<form onSubmit={handleAddService}>
					<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
						<div className="sm:col-span-2">
							<label
								for="name"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Product Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Type product name"
								required=""
							/>
						</div>
						<div className="w-full">
							<label
								for="brand"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Brand
							</label>
							<input
								type="text"
								name="brandName"
								id="brand"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Product brand"
								required=""
							/>
						</div>
						<div className="w-full">
							<label
								for="price"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Price
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
						<div>
							<label
								for="category"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Category
							</label>
							<select
								id="category"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							>
								<option selected>Select category</option>
								<option>TV/Monitors</option>
								<option>PC</option>
								<option>Gaming/Console</option>
								<option>Phones</option>
							</select>
						</div>
						<div>
							<label
								for="item-weight"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Item Weight (kg)
							</label>
							<input
								type="number"
								name="item-weight"
								id="item-weight"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="12"
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								for="description"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Description
							</label>
							<textarea
								id="description"
								name="description"
								rows="8"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Your description here"
							></textarea>
						</div>
					</div>
					<button
						type="submit"
						className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
					>
						Add product
					</button>
				</form>
			</div>
		</section>
	);
};

export default AddServices;
