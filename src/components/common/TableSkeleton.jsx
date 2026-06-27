import Skeleton from "./Skeleton";

function TableSkeleton({ rows = 5 }) {
	return (
		<div className="overflow-hidden bg-white rounded-none border border-gray-200 mb-8">
			<div className="border-b border-b-gray-200 p-5">
				<Skeleton className="h-6 w-48" />
			</div>

			<div className="space-y-3 p-4">
				{Array.from({ length: rows }).map((_, index) => (
					<div key={index} className="grid grid-cols-5 gap-4">
						<Skeleton className="h-5" />
						<Skeleton className="h-5" />
						<Skeleton className="h-5" />
						<Skeleton className="h-5" />
						<Skeleton className="h-5" />
					</div>
				))}
			</div>
		</div>
	);
}

export default TableSkeleton;
