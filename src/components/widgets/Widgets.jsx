import PropTypes from "prop-types";
import Widget from "../widgets/Widget";
import { widgetPropType } from "./WidgetPropTypes";

function Widgets({ widgetData }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
			{widgetData.map((widget) => (
				<Widget key={widget.id}>
					<p className="text-gray-500">{widget.title}</p>
					<h2 className="text-3xl font-bold mt-2">{widget.data}</h2>
				</Widget>
			))}
		</div>
	);
}

Widgets.propTypes = {
	widgetData: PropTypes.arrayOf(widgetPropType).isRequired,
};

export default Widgets;
