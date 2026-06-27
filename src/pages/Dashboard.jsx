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
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
				{loading ? (
					<WidgetsSkeleton />
				) : (
					<Widgets widgetData={widgetData} />
				)}
			</div>
			<Error />
			<MonthlyRewardTable />
			<TotalRewardTable />
			<TransactionTable />
		</div>
	);
}

export default Dashboard;
