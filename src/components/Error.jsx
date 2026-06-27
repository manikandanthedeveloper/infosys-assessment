function Error() {
	return (
		<div className="hidden bg-red-100 border border-red-300 rounded-lg p-6 mb-6">
			<h2 className="text-red-700 font-bold text-lg">
				Unable to load transactions
			</h2>

			<p className="text-red-500 mt-2">Please try again later.</p>
		</div>
	);
}

export default Error;
