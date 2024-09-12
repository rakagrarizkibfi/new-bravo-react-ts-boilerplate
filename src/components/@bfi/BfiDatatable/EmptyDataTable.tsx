import { SearchNoResult } from "@src/assets/svg";

const EmptyDataTable = () => {
	return (
		<div className="p-4">
			<img
				src={SearchNoResult}
				alt="graphic"
				style={{ width: 200 }}
			/>
			<p className="font-weight-bold text-center mt-2">No data Record to display</p>
		</div>
	);
};

export default EmptyDataTable;
