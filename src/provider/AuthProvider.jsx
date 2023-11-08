import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const googleLogIn = () => {
		setLoading(true);
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			const userEmail = currentUser?.email || user?.email;
			const loggedUser = { email: userEmail };
			setUser(currentUser);
			console.log("Current user", currentUser);
			setLoading(false);
			//if user
			if (currentUser) {
				axios
					.post("http://localhost:5000/jwt", loggedUser, {
						withCredentials: true,
					})
					.then((res) => {
						console.log("token response", res.data);
					});
			} else {
				axios.post("http://localhost:5000/logout", loggedUser, {
					withCredentials: true
				})
				.then(res =>{
					console.log(res.data);
				})
			}
		});
		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = { user, loading, createUser, logIn, googleLogIn, logOut };

	// 	if (user !== null) {
	// 	user.providerData.forEach((profile) => {
	// 		console.log("  Name: " + profile.displayName);
	// 		console.log("  Email: " + profile.email);
	// 		console.log("  Photo URL: " + profile.photoURL);
	// 	});
	// }

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
