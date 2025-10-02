import React from "react";
import { useLocation, useNavigate } from "react-router";
import { DataList, IconButton, Text } from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";

const UserDetails = () => {
	const location = useLocation();
	const { user } = location.state;
	const navigate = useNavigate();
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<IconButton
				position="fixed"
				top="15px"
				left="15px"
				onClick={() => navigate(-1)}
				size="md"
				zIndex="1000"
				variant="ghost"
			>
				<IoChevronBack />
			</IconButton>
			<Text textStyle="lg" fontWeight="medium" mb="4">
				User Details
			</Text>
			<DataList.Root orientation="horizontal" divideY="1px" maxW="lg">
				<DataList.Item pt="4">
					<DataList.ItemLabel>Name</DataList.ItemLabel>
					<DataList.ItemValue>{user.name}</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item pt="4">
					<DataList.ItemLabel>Email</DataList.ItemLabel>
					<DataList.ItemValue>{user.email}</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item pt="4">
					<DataList.ItemLabel>Address</DataList.ItemLabel>
					<DataList.ItemValue>
						{user.address.street
							? user.address.street + ", " + user.address.city
							: user.address
							? user.address
							: "N/A"}
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item pt="4">
					<DataList.ItemLabel>Phone</DataList.ItemLabel>
					<DataList.ItemValue>{user.phone}</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item pt="4">
					<DataList.ItemLabel>Website</DataList.ItemLabel>
					<DataList.ItemValue>{user.website}</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item pt="4">
					<DataList.ItemLabel>Company</DataList.ItemLabel>
					<DataList.ItemValue>
						{user.company.name
							? user.company.name
							: user.company
							? user.company
							: "N/A"}
					</DataList.ItemValue>
				</DataList.Item>
			</DataList.Root>
		</div>
	);
};

export default UserDetails;
