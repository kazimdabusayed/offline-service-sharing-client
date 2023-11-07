import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
	const { createUser } = useContext(AuthContext);
	// const [signupError, setSignupError] = useState("");
	// const [success, setSuccess] = useState("");
	const navigate = useNavigate();

	const handleSignUp = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");

		// reset error and success
		// setSignupError("");
		// setSuccess("");

		// if (password !== confirmPassword) {
		// 	setSignupError("Password don't match.");
		// 	return;
		// } else if (password.length < 6) {
		// 	console.log(password.length);
		// 	setSignupError("Password must be at least 6 characters long.");
		// 	return;
		// } else if (!/[A-Z]/.test(password)) {
		// 	setSignupError(
		// 		"Password must contain at least one capital letter."
		// 	);
		// 	return;
		// } else if (!/[!@#$%^&*]/.test(password)) {
		// 	setSignupError(
		// 		"Password must contain at least one special character."
		// 	);
		// 	return;
		// }

		createUser(email, password)
			.then((result) => {
				console.log(result.user);
				const createdAt = result.user.metadata?.creationTime;
				// const user = { email, createdAt: createdAt };
				axios
					.post("http://localhost:5000/api/v1/users", {
						name,
						email,
						createdAt: createdAt,
					})
					.then((res) => {
						console.log(res);
						if (res.data.insertedId) {
							toast.success("User Added Succssfully");
						}
						navigate("/login");
					});
			})
			.catch((error) => console.error(error));
	};

	return (
		<div className="flex flex-col max-w-md p-6 m-auto rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
			<div className="mb-8 text-center">
				<h1 className="my-3 text-4xl font-bold">Sign up</h1>
				<p className="text-sm dark:text-gray-400">
					Sign up to create your account
				</p>
			</div>
			<form onSubmit={handleSignUp} className="space-y-12">
				<div className="space-y-4">
					<div>
						<label htmlFor="name" className="block mb-2 text-sm">
							Name
						</label>
						<input
							type="name"
							name="name"
							id="name"
							placeholder="jenkins"
							className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
						/>
					</div>
					<div>
						<label htmlFor="photo" className="block mb-2 text-sm">
							photo
						</label>
						<input
							type="photo"
							name="photo"
							id="photo"
							placeholder=""
							className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block mb-2 text-sm">
							Email address
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="leroy@jenkins.com"
							className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
						/>
					</div>
					<div>
						<div className="flex justify-between mb-2">
							<label htmlFor="password" className="text-sm">
								Password
							</label>
							<a
								rel="noopener noreferrer"
								href="#"
								className="text-xs hover:underline dark:text-gray-400"
							>
								Forgot password?
							</a>
						</div>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="*****"
							className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
						/>
					</div>
				</div>
				<div className="space-y-2">
					<div>
						<button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							Sign in
						</button>
					</div>
					<p className="px-6 text-sm text-center dark:text-gray-400">
						Don't have an account yet?{" "}
						<Link
							rel="noopener noreferrer"
							to="/login"
							className="hover:underline dark:text-violet-400"
						>
							Log in
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Signup;
