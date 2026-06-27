import Error from "../components/Error";
import Header from "../components/Header";
import MonthlyRewardTable from "../components/MonthlyRewardTable";
import TotalRewardTable from "../components/TotalRewardTable";
import TransactionTable from "../components/TransactionTable";
import Widgets from "../components/Widgets";
import { useTransactions } from "../hooks/useTransactions";
import logger from "../utils/logger";
import rewardAggregator from "../utils/rewardAggregator";

function Dashboard() {
	const { transactions } = useTransactions();
	const rewardsData = rewardAggregator(transactions);
	logger.log("Transactions Data:", transactions);
	logger.log("Rewards Data:", rewardsData);
	//50 + 92 = 142
	//50 + 20 = 70
	//50 + 84 = 134
	//142+70+134 = 346

	//12-2023 = 212
	//02-2024 = 134
	return (
		<div className="max-w-7xl mx-auto p-8">
			<Header />
			<Widgets />
			<Error />
			<MonthlyRewardTable />
			<TotalRewardTable />
			<TransactionTable />
		</div>
	);
}

export default Dashboard;
