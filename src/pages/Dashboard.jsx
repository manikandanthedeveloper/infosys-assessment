import { useMemo } from "react";
import NoDataFound from "../components/common/NoDataFound";
import TableSkeleton from "../components/common/TableSkeleton";
import WidgetsSkeleton from "../components/widgets/WidgetsSkeleton";
import Error from "../components/Error";
import Header from "../components/Header";
import MonthlyRewardTable from "../components/monthlyReward/MonthlyRewardTable";
import TotalRewardTable from "../components/totalRewards/TotalRewardTable";
import TransactionTable from "../components/transactions/TransactionTable";
import Widgets from "../components/widgets/Widgets";
import { useTransactions } from "../hooks/useTransactions";
import useWidgetData from "../hooks/useWidgetData";
import rewardAggregator from "../utils/rewardAggregator";

function Dashboard() {
	const { transactions, loading } = useTransactions();
	const { stats, monthlyRewards, totalRewards, rewardTransactions } = useMemo(
		() => rewardAggregator(transactions),
		[transactions],
	);
	const widgetData = useWidgetData(stats);

	console.log(transactions, "transactions!!!");
	return (
		<div className="max-w-7xl mx-auto p-8">
			<Header />
			{loading ? (
				<WidgetsSkeleton />
			) : widgetData.length > 0 ? (
				<Widgets widgetData={widgetData} />
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
			<Error />
		</div>
	);
}

export default Dashboard;
