import { nanoid as uniqId } from "nanoid";

export const generateCustomers = () => {
	return [
		{ id: uniqId(), name: "John Smith" },
		{ id: uniqId(), name: "Emma Wilson" },
		{ id: uniqId(), name: "Michael Brown" },
		{ id: uniqId(), name: "Sophia Davis" },
		{ id: uniqId(), name: "William Johnson" },
	];
};
