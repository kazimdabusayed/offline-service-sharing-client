import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";


const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout/>,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home/>,
			},
		],
	},
]);

export default router;