import useSort from "../../hooks/useSort";
import SortIcon from "../common/SortIcon";
import { transactionTablePropType } from "./transactionPropTypes";
import TransactionTableRow from "./TransactionTableRow";

function TransactionTable({ rewardTransactions }) {
	const { sortedData, handleSort, sortConfig } = useSort(
		rewardTransactions,
		"",
	);

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

							<th
								className="px-6 py-3 text-left cursor-pointer"
								onClick={() => handleSort("customerName")}
							>
								<SortIcon
									sortConfig={sortConfig}
									orderBy="customerName"
									fieldName="Customer Name"
								/>
							</th>
							<th
								className="px-6 py-3 text-left cursor-pointer"
								onClick={() => handleSort("purchaseDate")}
							>
								<SortIcon
									sortConfig={sortConfig}
									orderBy="purchaseDate"
									fieldName="Purchase Date"
								/>
							</th>
							<th className="px-6 py-3 text-left">Product</th>
							<th
								className="px-6 py-3 text-left cursor-pointer"
								onClick={() => handleSort("amount")}
							>
								<SortIcon
									sortConfig={sortConfig}
									orderBy="amount"
									fieldName="Price"
								/>
							</th>
							<th
								className="px-6 py-3 text-left cursor-pointer"
								onClick={() => handleSort("rewardPoints")}
							>
								<SortIcon
									sortConfig={sortConfig}
									orderBy="rewardPoints"
									fieldName="Reward"
								/>
							</th>
						</tr>
					</thead>
					<tbody>
						{sortedData.map((item) => (
							<TransactionTableRow item={item} key={item.id} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

TransactionTable.prototype = transactionTablePropType;

export default TransactionTable;
