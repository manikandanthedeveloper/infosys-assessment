function rewardCalculator(amount) {
	let rewardPoints = 0;

	if (amount > 100) {
		rewardPoints = (Math.floor(amount) - 100) * 2 + 50; // 2 points for every dollar above $100 and 1 point for every dollar between $50 and $100
	} else if (amount > 50) {
		rewardPoints = Math.floor(amount) - 50; // 1 point for every dollar above $50
	}
	return rewardPoints;
}

export default rewardCalculator;
