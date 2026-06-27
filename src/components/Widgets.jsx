import { useTransactions } from "../hooks/useTransactions";
import Skeleton from "./common/Skeleton";
import Widget from "./Widget";

function Widgets() {
	const { loading } = useTransactions();
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
			{loading ? (
				<>
					{Array.from({ length: 4 }).map((_, index) => (
						<Skeleton key={index} />
					))}
				</>
			) : (
				<>
					<Widget>
						<p className="text-gray-500">Customers</p>
						<h2 className="text-3xl font-bold mt-2">4</h2>
					</Widget>
					<Widget>
						<p className="text-gray-500">Transactions</p>
						<h2 className="text-3xl font-bold mt-2">18</h2>
					</Widget>

					<Widget className="bg-white rounded-none border border-gray-200 p-6 animate-widget">
						<p className="text-gray-500">Rewards Awarded</p>
						<h2 className="text-3xl font-bold mt-2">920</h2>
					</Widget>

					<Widget className="bg-white rounded-none border border-gray-200 p-6 animate-widget">
						<p className="text-gray-500">Months</p>
						<h2 className="text-3xl font-bold mt-2">3</h2>
					</Widget>
				</>
			)}
		</div>
	);
}

export default Widgets;
