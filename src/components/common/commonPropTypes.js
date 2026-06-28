import PropTypes from "prop-types";

export const noDataFoundPropTypes = {
	title: PropTypes.string,
	description: PropTypes.string.isRequired,
};

export const sortIconPropTypes = {
	sortConfig: PropTypes.exact({
		key: PropTypes.string.isRequired,
		direction: PropTypes.oneOf(["asc", "desc"]).isRequired,
	}),
	orderBy: PropTypes.string.isRequired,
	fieldName: PropTypes.string.isRequired,
};

export const tablePropTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export const tablePlaceholderRowPropTypes = {
	className: PropTypes.string,
};

export const tablePlaceholderPropTypes = {
	rows: PropTypes.number,
};
