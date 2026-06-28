import { dataSectionPropTypes } from "./commonPropTypes";
import NoDataFound from "./NoDataFound";

function DataSection({ loading, data, skeleton, emptyMessage, children }) {
	if (loading) return skeleton;

	if (!data || data.length === 0)
		return <NoDataFound description={emptyMessage} />;
	return children;
}

DataSection.propTypes = dataSectionPropTypes;

export default DataSection;
