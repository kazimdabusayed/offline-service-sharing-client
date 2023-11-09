import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddServices from "../pages/AddServices/AddServices";
import AllServices from "../pages/AllServices/AllServices";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MySchedule from "../pages/MySchedule/MySchedule";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Signup from "../pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/all-services",
				element: <AllServices />,
			},
			{
				path: "/services/:id",
				element: (
					<PrivateRoutes>
						<ServiceDetails />
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/api/v1/services/${params.id}`),
			},
			{
				path: "/manage-services",
				element: (
					<PrivateRoutes>
						<AddServices />
					</PrivateRoutes>
				),
			},
			{
				path: "/add-services",
				element: (
					<PrivateRoutes>
						<AddServices />
					</PrivateRoutes>
				),
			},
			{
				path: "/my-schedules",
				element: (
					<PrivateRoutes>
						<MySchedule />
					</PrivateRoutes>
				),
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
]);

export default router;