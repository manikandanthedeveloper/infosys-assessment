import { useEffect, useState } from "react";
import { fetchTransactions } from "../services/transactionService";

export const useTransactions = () => {
	const [transactions, setTransactions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isMounted = true;

		const loadTransactions = async () => {
			try {
				setLoading(true);
				setError(null);
				const data = await fetchTransactions();

				if (isMounted) {
					setTransactions(data || []);
				}
			} catch (err) {
				if (isMounted) {
					setError(err.message || "Failed to load transactions");
				}
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		};

		loadTransactions();

		return () => {
			isMounted = false;
		};
	}, []);

	return { transactions, loading, error };
};
