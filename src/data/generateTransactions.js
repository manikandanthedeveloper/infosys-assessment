import { faker } from "@faker-js/faker";
import { nanoid as uniqId } from "nanoid";
import { customers } from "./customers";

faker.seed(123);

const products = [
	"Laptop",
	"Mobile",
	"Keyboard",
	"Mouse",
	"Monitor",
	"Headphones",
	"Tablet",
	"Printer",
];

const months = ["2023-12", "2024-01", "2024-02"];

export const generateTransactions = () => {
	return months.flatMap((month) =>
		customers.flatMap((customer) =>
			// faker.number.int({ min: 3, max: 6 }
			Array.from({ length: faker.number.int({ max: 1 }) }, () => {
				const day = faker.number.int({ min: 1, max: 28 });

				return {
					id: uniqId(),
					customerId: customer.id,
					customerName: customer.name,
					purchaseDate: `${month}-${String(day).padStart(2, "0")}`,
					product: faker.helpers.arrayElement(products),
					amount: Number(
						faker.commerce.price({
							min: 20,
							max: 250,
							dec: 2,
						}),
					),
				};
			}),
		),
	);
};
