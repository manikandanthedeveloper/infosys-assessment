import { useMemo } from "react";
import { WIDGETS_TITLES } from "../constants";

const useWidgetData = (stats) => {
	return useMemo(() => {
		return [
			{
				id: "WID101",
				title: WIDGETS_TITLES.customers,
				data: stats.customers,
			},
			{
				id: "WID102",
				title: WIDGETS_TITLES.transactions,
				data: stats.transactions,
			},
			{
				id: "WID103",
				title: WIDGETS_TITLES.rewardsAwarded,
				data: stats.rewardsAwarded,
			},
			{
				id: "WID104",
				title: WIDGETS_TITLES.months,
				data: stats.months,
			},
		];
	}, [stats]);
};

export default useWidgetData;
