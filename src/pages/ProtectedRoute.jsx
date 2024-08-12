import { useNavigate } from "react-router-dom";
import { useAuthEn } from "../contexts/FakeAuthEnContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
	const { isAuthenticated } = useAuthEn();
	const navigate = useNavigate();

	useEffect(
		function () {
			if (!isAuthenticated) navigate("/");
		},
		[isAuthenticated, navigate]
	);

	return isAuthenticated ? children : null;
}
export default ProtectedRoute;
