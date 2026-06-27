import rewardCalculator from "./rewardCalculator";
import dateFormatter from "./dateFormatter";

function rewardAggregator(transactions) {
	const result = transactions.reduce(
		(acc, transaction) => {
			const rewardPoints = rewardCalculator(transaction.amount);

			const { month, year, MmYyyy } = dateFormatter(
				transaction.purchaseDate,
			);

			// Transactions Table
			acc.transactions.push({
				...transaction,
				rewardPoints,
			});

			// Monthly Rewards
			const monthlyKey = `${transaction.customerId}-${MmYyyy}`;
			if (!acc.monthlyRewards[monthlyKey]) {
				acc.monthlyRewards[monthlyKey] = {
					customerId: transaction.customerId,
					customerName: transaction.customerName,
					month: month.name,
					monthNumber: month.number,
					year,
					rewardPoints: 0,
				};
			}
			acc.monthlyRewards[monthlyKey].rewardPoints += rewardPoints;

			// Total Rewards
			const totalKey = transaction.customerId;

			if (!acc.totalRewards[totalKey]) {
				acc.totalRewards[totalKey] = {
					customerId: transaction.customerId,
					customerName: transaction.customerName,
					rewardPoints: 0,
				};
			}
			acc.totalRewards[totalKey].rewardPoints += rewardPoints;
			acc.customerIds.add(transaction.customerId);
			acc.totalRewardPoints += rewardPoints;
			acc.months.add(`${year}-${month.number}`);
			return acc;
		},
		{
			transactions: [],
			monthlyRewards: {},
			totalRewards: {},
			customerIds: new Set(),
			months: new Set(),
			totalRewardPoints: 0,
		},
	);

	return {
		transactions: result.transactions.sort(
			(a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate),
		),
		monthlyRewards: Object.values(result.monthlyRewards).sort((a, b) => {
			if (a.year !== b.year) return a.year - b.year;
			return a.monthNumber - b.monthNumber;
		}),
		totalRewards: Object.values(result.totalRewards).sort((a, b) =>
			a.customerName.localeCompare(b.customerName),
		),
		stats: {
			customers: result.customerIds.size,
			transactions: result.transactions.length,
			rewardsAwarded: result.totalRewardPoints,
			months: result.months.size,
		},
	};
}

export default rewardAggregator;
