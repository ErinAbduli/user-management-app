import React from "react";
import { Avatar, Button, Card, Stack, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { LuMail } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";

const UserCard = ({ user }) => {
	const navigate = useNavigate();

	return (
		<div>
			<Card.Root width="350px">
				<Card.Body
					display="flex"
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					padding="5"
					height="100%"
				>
					<Stack gap="0">
						<Text fontWeight="semibold" textStyle="sm">
							{user.name}
						</Text>
						<Text
							color="fg.muted"
							textStyle="sm"
							display="flex"
							alignItems="center"
							gap="1"
						>
							<LuMail /> {user.email}
						</Text>
						<Text
							color="fg.muted"
							textStyle="sm"
							display="flex"
							alignItems="center"
							gap="1"
						>
							<MdWorkOutline />{" "}
							{user.company.name
								? user.company.name
								: user.company
								? user.company
								: "N/A"}
						</Text>
					</Stack>
					<Stack>
						<Button
							variant="outline"
							onClick={() =>
								navigate(`/user/${user.id}`, {
									state: { user },
								})
							}
						>
							Details
						</Button>
					</Stack>
				</Card.Body>
			</Card.Root>
		</div>
	);
};

export default UserCard;
