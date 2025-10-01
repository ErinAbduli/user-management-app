import { Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user/:id" element={<UserDetails />} />
		</Routes>
	);
}

export default App;
