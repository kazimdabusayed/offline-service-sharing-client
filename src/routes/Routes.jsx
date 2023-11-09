import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AllServices from "../pages/AllServices/AllServices";
import AddServices from "../pages/AddServices/AddServices";
import MySchedule from "../pages/MySchedule/MySchedule";
import PrivateRoutes from "./PrivateRoutes";
import axios from "axios";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";


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
				element: <PrivateRoutes>
					<ServiceDetails/>
				</PrivateRoutes>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/api/v1/services/${params.id}`
					),
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