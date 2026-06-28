import logger from "../utils/logger";
import transactionData from "../data/transactions.json";

export const fetchTransactions = async () => {
	try {
		logger.debug("Fetching transactions...");
		return Promise.resolve(transactionData);
	} catch (error) {
		logger.error("Failed to fetch transactions", error.message);
		throw error;
	}
};
