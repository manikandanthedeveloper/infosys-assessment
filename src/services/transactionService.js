import { transactions } from "../data";
import logger from "../utils/logger";

export const fetchTransactions = async () => {
	try {
		logger.debug("Fetching transactions...");
		return Promise.resolve(transactions);
	} catch (error) {
		logger.error("Failed to fetch transactions", error.message);
		throw error;
	}
};
