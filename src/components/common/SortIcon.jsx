import iconSort from "../../assets/icon-sort.svg";
import iconSortUp from "../../assets/icon-sort-up.svg";
import iconSortDown from "../../assets/icon-sort-down.svg";

function SortIcon({ sortConfig, field }) {
	return (
		<img
			src={
				sortConfig.key !== field
					? iconSort
					: sortConfig.direction === "asc"
						? iconSortDown
						: iconSortUp
			}
			alt="Sort"
			height={20}
			width={20}
		/>
	);
}

export default SortIcon;
