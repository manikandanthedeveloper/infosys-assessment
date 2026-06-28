import PropTypes from "prop-types";

export const totalRewardTableRowPropType = PropTypes.exact({
	customerId: PropTypes.string.isRequired,
	customerName: PropTypes.string.isRequired,
	rewardPoints: PropTypes.number.isRequired,
}).isRequired;

export const totalRewardTablePropType = {
	totalRewards: PropTypes.arrayOf(totalRewardTableRowPropType).isRequired,
};
