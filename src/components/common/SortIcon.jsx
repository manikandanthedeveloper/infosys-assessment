import iconSort from "../../assets/icon-sort.svg";
import iconSortUp from "../../assets/icon-sort-up.svg";
import iconSortDown from "../../assets/icon-sort-down.svg";
import { sortIconPropTypes } from "./commonPropTypes";

function SortIcon({ sortConfig, orderBy, fieldName }) {
	return (
		<div className="flex flex-row items-center justify-items-start gap-4">
			<span>{fieldName}</span>
			<img
				src={
					sortConfig.key !== orderBy
						? iconSort
						: sortConfig.direction === "asc"
							? iconSortDown
							: iconSortUp
				}
				alt="Sort"
				height={20}
				width={20}
			/>
		</div>
	);
}

SortIcon.propTypes = sortIconPropTypes;

export default SortIcon;
