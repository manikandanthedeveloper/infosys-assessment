import { faker } from "@faker-js/faker";
import { generateCustomers } from "./generateCustomers";
import { MONTHS, PRODUCTS } from "../constants";

faker.seed(123);
export const generateTransactions = () => {
	const customers = generateCustomers();
	let cusId = 1000;
	return MONTHS.flatMap((month) =>
		customers.flatMap((customer) =>
			// faker.number.int({ min: 3, max: 5 })
			Array.from({ length: faker.number.int({ min: 1, max: 1 }) }, () => {
				// faker.number.int({ min: 1, max: 28 });
				const day = faker.number.int({ min: 1, max: 1 });

				return {
					id: `TXN${cusId++}`,
					customerId: customer.id,
					customerName: customer.name,
					purchaseDate: `${month}-${String(day).padStart(2, "0")}`,
					product: faker.helpers.arrayElement(PRODUCTS),
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
