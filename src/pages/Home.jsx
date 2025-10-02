import React from "react";
import UserList from "../components/UserList";

const Home = ({ users }) => {
	return (
		<div>
			<UserList users={users} />
		</div>
	);
};

export default Home;
