import { createContext, useContext, useReducer } from "react";

const AuthEnContext = createContext();

const initalState = {
	user: null,
	isAuthenticated: false,
};

function reducer(state, action) {
	switch (action.type) {
		case "login": {
			return { ...state, user: action.payload, isAuthenticated: true };
		}
		case "logout": {
			return { ...state, user: null, isAuthenticated: false };
		}

		default:
			throw new Error("Unknown action");
	}
}

const FAKE_USER = {
	name: "George",
	email: "jack@example.com",
	password: "qwerty",
	avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthEnProvider({ children }) {
	const [{ user, isAuthenticated }, dispatch] = useReducer(
		reducer,
		initalState
	);
	function login(email, password) {
		if (email === FAKE_USER.email && password === FAKE_USER.password) {
			dispatch({ type: "login", payload: FAKE_USER });
		}
	}

	function logout() {
		dispatch({ type: "logout" });
	}

	return (
		<AuthEnContext.Provider value={{ user, isAuthenticated, login, logout }}>
			{children}
		</AuthEnContext.Provider>
	);
}

function useAuthEn() {
	const context = useContext(AuthEnContext);
	if (context === undefined)
		throw new Error("AuthEnContext was used outside AuthEnProvider");
	return context;
}

export { AuthEnProvider, useAuthEn };
