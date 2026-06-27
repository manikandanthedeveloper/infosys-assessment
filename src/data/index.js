import { generateCustomers } from "./generateCustomers";
import { generateTransactions } from "./generateTransactions";

const transactions = generateTransactions();
const customers = generateCustomers();

export { transactions, customers };
