import PropTypes from "prop-types";
import MonthlyRewardRow from "./MonthlyRewardRow";
import Table from "../common/Table";
import { monthlyRewardRowPropType } from "./rewardPropTypes";

import useSort from "../../hooks/useSort";
import SortIcon from "../common/SortIcon";

function MonthlyRewardTable({ monthlyReward }) {
	const { sortedData, handleSort, sortConfig } = useSort(monthlyReward);

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
							<div className="flex flex-row items-center justify-items-start gap-4">
								<span>Customer Name</span>
								<SortIcon
									sortConfig={sortConfig}
									field="customerName"
								/>
							</div>
						</th>
						<th
							className="px-6 py-3 text-left cursor-pointer"
							onClick={() => handleSort("monthNumber")}
						>
							<div className="flex flex-row items-center justify-items-start gap-4">
								<span>Month</span>
								<SortIcon
									sortConfig={sortConfig}
									field="monthNumber"
								/>
							</div>
						</th>
						<th
							className="px-6 py-3 text-left cursor-pointer"
							onClick={() => handleSort("year")}
						>
							<div className="flex flex-row items-center justify-items-start gap-4">
								<span>Year</span>
								<SortIcon
									sortConfig={sortConfig}
									field="year"
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

MonthlyRewardTable.propTypes = {
	monthlyReward: PropTypes.arrayOf(monthlyRewardRowPropType).isRequired,
};

export default MonthlyRewardTable;
