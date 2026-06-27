function TotalRewardTable() {
	return (
		<div className="bg-white rounded-none border border-gray-200 mb-8">
			<div className="border-b border-b-gray-200 p-5">
				<h2 className="text-xl font-bold">Total Rewards</h2>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left">
								Customer Name
							</th>

							<th className="px-6 py-3 text-right">
								Reward Points
							</th>
						</tr>
					</thead>

					<tbody>
						<tr className="border-b border-b-gray-200">
							<td className="px-6 py-4">John Smith</td>

							<td className="px-6 py-4 text-right font-bold text-green-600">
								610
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4">Mary Johnson</td>

							<td className="px-6 py-4 text-right font-bold text-green-600">
								480
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default TotalRewardTable;
