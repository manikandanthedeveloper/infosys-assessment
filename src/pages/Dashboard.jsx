import { useMemo } from "react";
import NoDataFound from "../components/common/NoDataFound";
import TableSkeleton from "../components/common/TableSkeleton";
import WidgetsSkeleton from "../components/widgets/WidgetsSkeleton";
import Error from "../components/Error";
import Header from "../components/Header";
import MonthlyRewardTable from "../components/MonthlyReward/MonthlyRewardTable";
import TotalRewardTable from "../components/TotalRewardTable";
import TransactionTable from "../components/TransactionTable";
import Widgets from "../components/widgets/Widgets";
import { useTransactions } from "../hooks/useTransactions";
import useWidgetData from "../hooks/useWidgetData";
import rewardAggregator from "../utils/rewardAggregator";

function Dashboard() {
	const { transactions, loading } = useTransactions();
	const { stats, monthlyRewards } = useMemo(
		() => rewardAggregator(transactions),
		[transactions],
	);
	const widgetData = useWidgetData(stats);

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
			<TotalRewardTable />
			<TransactionTable />
			<Error />
		</div>
	);
}

export default Dashboard;
