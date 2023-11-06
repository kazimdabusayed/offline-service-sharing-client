import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="">
				<span className="loading loading-spinner text-primary"></span>
				<span className="loading loading-spinner text-secondary"></span>
				<span className="loading loading-spinner text-accent"></span>
				<span className="loading loading-spinner text-neutral"></span>
				<span className="loading loading-spinner text-info"></span>
				<span className="loading loading-spinner text-success"></span>
				<span className="loading loading-spinner text-warning"></span>
				<span className="loading loading-spinner text-error"></span>
			</div>
		);
	}

	console.log(user);
	if (user?.email) {
		return children;
	}

	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
	children: PropTypes.node,
};
