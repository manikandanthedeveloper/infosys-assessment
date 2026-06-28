import PropTypes from "prop-types";

export const monthlyRewardRowPropType = PropTypes.exact({
	id: PropTypes.string.isRequired,
	customerId: PropTypes.string.isRequired,
	customerName: PropTypes.string.isRequired,
	month: PropTypes.string.isRequired,
	monthNumber: PropTypes.number,
	year: PropTypes.number.isRequired,
	rewardPoints: PropTypes.number.isRequired,
}).isRequired;

export const monthlyRewardTablePropType = {
	monthlyReward: PropTypes.arrayOf(monthlyRewardRowPropType).isRequired,
};