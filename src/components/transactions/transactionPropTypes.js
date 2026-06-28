import PropTypes from "prop-types";

export const transactionRowPropType = PropTypes.exact({
	id: PropTypes.string.isRequired,
	customerId: PropTypes.string.isRequired,
	customerName: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	product: PropTypes.string.isRequired,
	purchaseDate: PropTypes.string.isRequired,
}).isRequired;

export const transactionTablePropType = {
	rewardTransactions: PropTypes.arrayOf(transactionRowPropType).isRequired,
};
