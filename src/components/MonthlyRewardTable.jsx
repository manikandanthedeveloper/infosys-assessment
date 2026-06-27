function MonthlyRewardTable() {
	return (
		<div className="bg-white rounded-none border border-gray-200 mb-8">
			<div className="border-b border-b-gray-200 p-5">
				<h2 className="text-xl font-bold">Monthly Rewards</h2>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left">Customer ID</th>

							<th className="px-6 py-3 text-left">
								Customer Name
							</th>

							<th className="px-6 py-3 text-left">Month</th>

							<th className="px-6 py-3 text-left">Year</th>

							<th className="px-6 py-3 text-right">
								Reward Points
							</th>
						</tr>
					</thead>

					<tbody>
						<tr className="border-b border-b-gray-200">
							<td className="px-6 py-4">1001</td>

							<td className="px-6 py-4">John Smith</td>

							<td className="px-6 py-4">January</td>

							<td className="px-6 py-4">2024</td>

							<td className="px-6 py-4 text-right font-semibold">
								220
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4">1002</td>

							<td className="px-6 py-4">Mary Johnson</td>

							<td className="px-6 py-4">January</td>

							<td className="px-6 py-4">2024</td>

							<td className="px-6 py-4 text-right font-semibold">
								160
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default MonthlyRewardTable;
