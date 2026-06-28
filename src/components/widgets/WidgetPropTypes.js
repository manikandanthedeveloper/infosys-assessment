import PropTypes from "prop-types";

export const widgetPropType = {
	customers: PropTypes.number.isRequired,
	transactions: PropTypes.number.isRequired,
	rewardsAwarded: PropTypes.number.isRequired,
	months: PropTypes.number.isRequired,
};
