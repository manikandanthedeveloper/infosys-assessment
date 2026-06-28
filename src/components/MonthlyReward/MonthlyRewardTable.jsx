import MonthlyRewardRow from "./MonthlyRewardRow";
import Table from "../common/Table";
import { monthlyRewardTablePropType } from "./rewardPropTypes";

import useSort from "../../hooks/useSort";
import SortIcon from "../common/SortIcon";

function MonthlyRewardTable({ monthlyReward }) {
	const { sortedData, handleSort, sortConfig } = useSort(monthlyReward, "");

	return (
		<Table title="Monthly Rewards">
			<table className="min-w-full">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-6 py-3 text-left">
							<span>Customer Id</span>
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
							onClick={() => handleSort("monthNumber")}
						>
							<div className="flex flex-row items-center justify-items-start gap-4">
								<SortIcon
									sortConfig={sortConfig}
									orderBy="monthNumber"
									fieldName="Month"
								/>
							</div>
						</th>
						<th
							className="px-6 py-3 text-left cursor-pointer"
							onClick={() => handleSort("year")}
						>
							<div className="flex flex-row items-center justify-items-start gap-4">
								<SortIcon
									sortConfig={sortConfig}
									orderBy="year"
									fieldName="Year"
								/>
							</div>
						</th>
						<th className="px-6 py-3 text-right">Reward Points</th>
					</tr>
				</thead>

				<tbody>
					{sortedData.map((item) => (
						<MonthlyRewardRow item={item} key={item.id} />
					))}
				</tbody>
			</table>
		</Table>
	);
}

MonthlyRewardTable.propTypes = monthlyRewardTablePropType;

export default MonthlyRewardTable;
