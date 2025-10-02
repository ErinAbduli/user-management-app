import React from "react";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { Input, InputGroup, Kbd, Button } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState("");

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

	const filteredUsers = users.filter(
		(user) =>
			user.name.toLowerCase().includes(search.toLowerCase()) ||
			user.email.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="h-screen flex flex-col gap-4 justify-start items-center pt-10">
			<div className="w-full flex justify-center items-end gap-4">
				<InputGroup
					startElement={<LuSearch />}
					endElement={<Kbd>⌘K</Kbd>}
					width={"400px"}
					marginTop={"70px"}
				>
					<Input
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search users"
					/>
				</InputGroup>
				<Button>Add User</Button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
				{filteredUsers.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</div>
	);
};

export default UserList;
