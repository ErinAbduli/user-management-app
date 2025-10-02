import { Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import AddUser from "./pages/AddUser";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/users"
				);
				console.log(response.data);
				setUsers(response.data);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};
		fetchUsers();
	}, []);

	const onAddUserSubmit = (newUser) => {
		setUsers([newUser, ...users]);
	};

	return (
		<Routes>
			<Route path="/" element={<Home users={users} />} />
			<Route path="/user/:id" element={<UserDetails />} />
			<Route
				path="/add-user"
				element={<AddUser onAddUserSubmit={onAddUserSubmit} />}
			/>
		</Routes>
	);
}

export default App;
