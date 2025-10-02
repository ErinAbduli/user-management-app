import React from "react";
import { Button, Field, Fieldset, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toaster } from "../components/ui/toaster";

const AddUser = ({ onAddUserSubmit }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		address: "",
		phone: "",
		website: "",
		company: "",
	});

	const navigate = useNavigate();

	let id = 11;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.name === "" || formData.email === "") {
			toaster.create({
				title: "The Name and Email fields are required.",
				type: "error",
			});
			return;
		}
		onAddUserSubmit({ id: id++, ...formData });
		navigate("/");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Fieldset.Root
					size="md"
					maxW="sm"
					margin="auto"
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100vh"
				>
					<Stack alignItems="center" justifyContent="center">
						<Fieldset.Legend>Add a New User!</Fieldset.Legend>
					</Stack>

					<Fieldset.Content>
						<Field.Root>
							<Field.Label>Name</Field.Label>
							<Input
								name="name"
								onChange={(e) =>
									setFormData({
										...formData,
										name: e.target.value,
									})
								}
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label>Email</Field.Label>
							<Input
								name="email"
								type="email"
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label>Address</Field.Label>
							<Input
								name="address"
								type="text"
								onChange={(e) => {
									setFormData({
										...formData,
										address: e.target.value,
									});
								}}
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label>Phone Number</Field.Label>
							<Input
								name="phone"
								type="tel"
								onChange={(e) => {
									setFormData({
										...formData,
										phone: e.target.value,
									});
								}}
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label>Website</Field.Label>
							<Input
								name="website"
								type="url"
								onChange={(e) => {
									setFormData({
										...formData,
										website: e.target.value,
									});
								}}
							/>
						</Field.Root>

						<Field.Root>
							<Field.Label>Company</Field.Label>
							<Input
								name="company"
								type="text"
								onChange={(e) => {
									setFormData({
										...formData,
										company: e.target.value,
									});
								}}
							/>
						</Field.Root>
					</Fieldset.Content>
					<Fieldset.ErrorText>
						Some fields are invalid. Please check them.
					</Fieldset.ErrorText>
					<Button
						type="submit"
						width="full"
						alignSelf="center"
						marginTop="4"
					>
						Submit
					</Button>
				</Fieldset.Root>
			</form>
		</div>
	);
};

export default AddUser;
