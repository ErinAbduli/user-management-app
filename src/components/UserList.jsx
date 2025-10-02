import React from "react";
import { useState } from "react";
import UserCard from "./UserCard";
import { Input, InputGroup, Kbd, Button } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router";

const UserList = ({ users }) => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const filteredUsers = users.filter((user) => {
		if (search === "") {
			return true;
		}
		return (
			user.name.toLowerCase().includes(search.toLowerCase()) ||
			user.email.toLowerCase().includes(search.toLowerCase())
		);
	});

	return (
		<div className="h-screen flex flex-col gap-4 justify-start items-center pt-10">
			<div className="w-full flex flex-col sm:flex-row justify-center items-center sm:items-end gap-4">
				<InputGroup
					startElement={<LuSearch />}
					endElement={<Kbd>⌘K</Kbd>}
					marginTop="70px"
					width={{ base: "70%", sm: "300px" }}
				>
					<Input
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search users"
					/>
				</InputGroup>
				<Button onClick={() => navigate("/add-user")}>Add User</Button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
				{filteredUsers
					? filteredUsers.map((user) => (
							<UserCard key={user.id} user={user} />
					  ))
					: "No users found"}
			</div>
		</div>
	);
};

export default UserList;
