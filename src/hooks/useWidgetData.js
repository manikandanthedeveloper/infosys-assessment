import { useMemo } from "react";
import { nanoid as uniqId } from "nanoid";
import rewardAggregator from "../utils/rewardAggregator";
import { WIDGETS_TITLES } from "../constants";

const useWidgetData = (transactions) => {
	const { stats } = useMemo(
		() => rewardAggregator(transactions),
		[transactions],
	);
	return useMemo(() => {
		return [
			{
				id: uniqId(),
				title: WIDGETS_TITLES.customers,
				data: stats.customers,
			},
			{
				id: uniqId(),
				title: WIDGETS_TITLES.transactions,
				data: stats.transactions,
			},
			{
				id: uniqId(),
				title: WIDGETS_TITLES.rewardsAwarded,
				data: stats.rewardsAwarded,
			},
			{
				id: uniqId(),
				title: WIDGETS_TITLES.months,
				data: stats.months,
			},
		];
	}, [stats]);
};

export default useWidgetData;
