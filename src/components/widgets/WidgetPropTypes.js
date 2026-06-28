import PropTypes from "prop-types";

export const widgetPropType = PropTypes.exact({
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});
