import useScrolPosition from "../../hooks/useScrolPosition";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navber = () => {

	const scrollPosition = useScrolPosition();
	const { user, logOut } = useContext(AuthContext);

	console.log(user?.displayName);

	const handleLogOut = () => {
		logOut()
		.then()
		.catch();
	};

	return (
		<header
			className={classNames(
				scrollPosition > 0 ? "shadow " : "shadow-none",
				"sticky top-0 transition-shadow w-full flex flex-wrap sm:justify-start sm:flex-nowrap z-50 bg-blue-600 border-b border-white/[.5] py-3 sm:py-0"
			)}
		>
			<nav
				className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex items-center justify-between">
					<a
						className="flex-none text-xl font-semibold text-white"
						href="#"
						aria-label="Brand"
					>
						Brand
					</a>
					<div className="sm:hidden">
						<button
							type="button"
							className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
							data-hs-collapse="#navbar-collapse-with-animation"
							aria-controls="navbar-collapse-with-animation"
							aria-label="Toggle navigation"
						>
							<svg
								className="hs-collapse-open:hidden w-4 h-4"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
								/>
							</svg>
							<svg
								className="hs-collapse-open:block hidden w-4 h-4"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</button>
					</div>
				</div>

				<div
					id="navbar-collapse-with-animation"
					className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
				>
					<div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
						<NavLink
							className="font-medium text-white sm:py-6"
							to="/services"
							aria-current="page"
						>
							Services
						</NavLink>
						{user && (
							<div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
								<button
									type="button"
									className="flex items-center w-full text-white/[.8] hover:text-white font-medium"
								>
									Dashboard
									<svg
										className="ml-2 w-2.5 h-2.5"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										></path>
									</svg>
								</button>

								<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
									<NavLink
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
										to="/my-services"
									>
										My-services
									</NavLink>
									<NavLink
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
										to="/add-services"
									>
										Add-services
									</NavLink>
									<NavLink
										className="flex items-center gap-x-3.5 py-2 px-3 cursor-pointer rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
										to="/my-schedules"
									>
										My-schedules
									</NavLink>
								</div>
							</div>
						)}

						{user ? (
							<div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]  sm:py-4">
								<button
									type="button"
									className="flex items-center w-full"
								>
									{
										<img
											src={
												user?.photoURL
													? user.photoURL
													: "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
											}
											alt="avater"
											className="w-10 h-10 rounded-xl"
										/>
									}
								</button>

								<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">

									<div className="py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
										<p>{user?.displayName}</p>
										<p>{user?.email}</p>
									</div>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
										to="/"
									>
										Profile
									</a>
									<p
										onClick={handleLogOut}
										className="flex items-center gap-x-3.5 py-2 px-3 cursor-pointer rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
									>
										Log Out
									</p>
								</div>
							</div>
						) : (
							<Link
								className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-l sm:border-white/[.3] sm:my-6 sm:pl-4"
								to="/login"
							>
								<svg
									className="w-4 h-4"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
								</svg>
								Log In
							</Link>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
};




export default Navber;
