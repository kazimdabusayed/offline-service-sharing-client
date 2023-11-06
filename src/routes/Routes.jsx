import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";


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

			}
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup/>,
	},
]);

export default router;