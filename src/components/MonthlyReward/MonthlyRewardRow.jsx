import { monthlyRewardRowPropType } from "./rewardPropTypes";

function MonthlyRewardRow({ item }) {
	return (
		<tr className="border-b border-b-gray-200">
			<td className="px-6 py-4">{item.customerId}</td>
			<td className="px-6 py-4">{item.customerName}</td>
			<td className="px-6 py-4">{item.month}</td>
			<td className="px-6 py-4">{item.year}</td>
			<td className="px-6 py-4 text-right font-semibold">
				{item.rewardPoints}
			</td>
		</tr>
	);
}

MonthlyRewardRow.propTypes = monthlyRewardRowPropType;

export default MonthlyRewardRow;
