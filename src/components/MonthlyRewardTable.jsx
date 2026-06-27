import Table from "./Table";

function MonthlyRewardTable({ monthlyReward }) {
	return (
		<Table title="Monthly Rewards">
			<table className="min-w-full">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-6 py-3 text-left">Customer Name</th>

						<th className="px-6 py-3 text-left">Month</th>

						<th className="px-6 py-3 text-left">Year</th>

						<th className="px-6 py-3 text-right">Reward Points</th>
					</tr>
				</thead>

				<tbody>
					{monthlyReward.map((item) => (
						<tr
							className="border-b border-b-gray-200"
							key={item.id}
						>
							<td className="px-6 py-4">{item.customerName}</td>

							<td className="px-6 py-4">{item.month}</td>

							<td className="px-6 py-4">{item.year}</td>

							<td className="px-6 py-4 text-right font-semibold">
								{item.rewardPoints}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Table>
	);
}

export default MonthlyRewardTable;
