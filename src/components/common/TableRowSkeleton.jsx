import { tablePlaceholderRowPropTypes } from "./commonPropTypes";

function TableRowSkeleton({ className = "" }) {
	return (
		<div className={`animate-pulse rounded-md bg-gray-200 ${className}`} />
	);
}

TableRowSkeleton.propTypes = tablePlaceholderRowPropTypes;

export default TableRowSkeleton;
