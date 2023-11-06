import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';


const Signup = () => {

    const { createUser } = useContext(AuthContext);

	const handleSignUp = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;


		createUser(name, email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
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
						<button
							className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
						>
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