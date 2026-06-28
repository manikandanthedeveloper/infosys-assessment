import { totalRewardTableRowPropType } from "./totalRewardPropTypes";

function TotalRewardRow({ item }) {
	return (
		<tr className="border-b border-b-gray-200">
			<td className="px-6 py-4">{item.customerName}</td>
			<td className="px-6 py-4 text-right font-bold text-green-600">
				{item.rewardPoints}
			</td>
		</tr>
	);
}

TotalRewardRow.propTypes = totalRewardTableRowPropType;

export default TotalRewardRow;
