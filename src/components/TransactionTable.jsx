function TransactionTable() {
	return (
		<div className="bg-white rounded-none border border-gray-200">
			<div className="border-b border-b-gray-200 p-5">
				<h2 className="text-xl font-bold">Transactions</h2>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-gray-50">
						<tr>
							<th className="px-6 py-3 text-left">
								Transaction ID
							</th>

							<th className="px-6 py-3 text-left">Customer</th>

							<th className="px-6 py-3 text-left">
								Purchase Date
							</th>

							<th className="px-6 py-3 text-left">Product</th>

							<th className="px-6 py-3 text-right">Price ($)</th>

							<th className="px-6 py-3 text-right">Reward</th>
						</tr>
					</thead>

					<tbody>
						<tr className="border-b border-b-gray-200">
							<td className="px-6 py-4">TX1001</td>

							<td className="px-6 py-4">John Smith</td>

							<td className="px-6 py-4">15-Jan-2024</td>

							<td className="px-6 py-4">Nike Shoes</td>

							<td className="px-6 py-4 text-right">$120</td>

							<td className="px-6 py-4 text-right font-semibold">
								90
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4">TX1002</td>

							<td className="px-6 py-4">Mary Johnson</td>

							<td className="px-6 py-4">21-Jan-2024</td>

							<td className="px-6 py-4">Apple Watch</td>

							<td className="px-6 py-4 text-right">$180</td>

							<td className="px-6 py-4 text-right font-semibold">
								210
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default TransactionTable;
