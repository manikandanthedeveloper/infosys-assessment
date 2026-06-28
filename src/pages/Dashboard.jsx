import { useMemo } from "react";
import NoDataFound from "../components/common/NoDataFound";
import TableSkeleton from "../components/common/TableSkeleton";
import WidgetsSkeleton from "../components/widgets/WidgetsSkeleton";
import Error from "../components/common/Error";
import Header from "../components/Header";
import MonthlyRewardTable from "../components/monthlyReward/MonthlyRewardTable";
import TotalRewardTable from "../components/totalRewards/TotalRewardTable";
import TransactionTable from "../components/transactions/TransactionTable";
import Widgets from "../components/widgets/Widgets";
import { useTransactions } from "../hooks/useTransactions";
import rewardAggregator from "../utils/rewardAggregator";
import { fetchTransactions } from "../services/transactionService";

function Dashboard() {
	const { transactions, loading, error } = useTransactions();
	const { stats, monthlyRewards, totalRewards, rewardTransactions } = useMemo(
		() => rewardAggregator(transactions),
		[transactions],
	);

	if (error) {
		return (
			<Error
				title="Unable to load transactions"
				description={error.message}
				onRetry={fetchTransactions}
			/>
		);
	}

	return (
		<div className="max-w-7xl mx-auto p-8">
			<Header />
			{loading ? (
				<WidgetsSkeleton />
			) : stats.transactions > 0 ? (
				<Widgets
					customers={stats.customers}
					transactions={stats.transactions}
					rewardsAwarded={stats.rewardsAwarded}
					months={stats.months}
				/>
			) : (
				<NoDataFound description="There is no widget data available to display." />
			)}
			{loading ? (
				<TableSkeleton />
			) : (
				<MonthlyRewardTable monthlyReward={monthlyRewards} />
			)}
			{loading ? (
				<TableSkeleton />
			) : (
				<TotalRewardTable totalRewards={totalRewards} />
			)}

			{loading ? (
				<TableSkeleton />
			) : (
				<TransactionTable rewardTransactions={rewardTransactions} />
			)}
		</div>
	);
}

export default Dashboard;
