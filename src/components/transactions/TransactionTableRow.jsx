import { transactionRowPropType } from "./transactionPropTypes";
import priceFormatter from "../../utils/priceFormatter";

function TransactionTableRow({ item }) {
	return (
		<tr className="border-b border-b-gray-200">
			<td className="px-6 py-4">{item.id}</td>
			<td className="px-6 py-4">{item.customerName}</td>
			<td className="px-6 py-4">{item.purchaseDate}</td>
			<td className="px-6 py-4">{item.product}</td>
			<td className="px-6 py-4 text-right">
				{priceFormatter(item.amount)}
			</td>
			<td className="px-6 py-4 text-right font-semibold">
				{item.rewardPoints}
			</td>
		</tr>
	);
}

TransactionTableRow.propTypes = transactionRowPropType;

export default TransactionTableRow;
