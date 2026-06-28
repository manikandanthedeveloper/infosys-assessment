import { useMemo, useState } from "react";

function useSort(data, initialKey, initialDirection = "asc") {
	const [sortConfig, setSortConfig] = useState({
		key: initialKey,
		direction: initialDirection,
	});

	const sortedData = useMemo(() => {
		const sorted = [...data];

		sorted.sort((a, b) => {
			let valueA = a[sortConfig.key];
			let valueB = b[sortConfig.key];

			if (typeof valueA === "string") {
				valueA = valueA.toLowerCase();
				valueB = valueB.toLowerCase();
			}

			if (valueA < valueB) {
				return sortConfig.direction === "asc" ? -1 : 1;
			}

			if (valueA > valueB) {
				return sortConfig.direction === "asc" ? 1 : -1;
			}

			return 0;
		});

		return sorted;
	}, [data, sortConfig]);

	const handleSort = (key) => {
		setSortConfig((prev) => ({
			key,
			direction:
				prev.key === key && prev.direction === "asc" ? "desc" : "asc",
		}));
	};

	return {
		sortedData,
		sortConfig,
		handleSort,
	};
}

export default useSort;
