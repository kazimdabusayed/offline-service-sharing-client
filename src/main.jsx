import React from "react";
import("preline");
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./routes/Routes";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<Toaster position="top-right"/>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
);
