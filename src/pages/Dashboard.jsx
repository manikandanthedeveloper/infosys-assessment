import NoDataFound from "../components/common/NoDataFound";
import WidgetsSkeleton from "../components/common/WidgetsSkeleton";
import Error from "../components/Error";
import Header from "../components/Header";
import MonthlyRewardTable from "../components/MonthlyRewardTable";
import TotalRewardTable from "../components/TotalRewardTable";
import TransactionTable from "../components/TransactionTable";
import Widgets from "../components/Widgets";
import { useTransactions } from "../hooks/useTransactions";
import useWidgetData from "../hooks/useWidgetData";

function Dashboard() {
	const { transactions, loading } = useTransactions();
	const widgetData = useWidgetData(transactions);

	return (
		<div className="max-w-7xl mx-auto p-8">
			<Header />
			{loading ? (
				<WidgetsSkeleton />
			) : widgetData.length > 0 ? (
				<>
					<Widgets widgetData={widgetData} />
				</>
			) : (
				<NoDataFound description="There is no widget data available to display." />
			)}
			<MonthlyRewardTable />
			<TotalRewardTable />
			<TransactionTable />
			<Error />
		</div>
	);
}

export default Dashboard;
