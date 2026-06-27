import PropTypes from "prop-types";
import Widget from "./Widget";

function Widgets({ widgetData }) {
	return (
		<>
			{widgetData.map((widget) => (
				<Widget key={widget.id}>
					<p className="text-gray-500">{widget.title}</p>
					<h2 className="text-3xl font-bold mt-2">{widget.data}</h2>
				</Widget>
			))}
		</>
	);
}

Widgets.propTypes = {
	widgetData: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			data: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
		}),
	).isRequired,
};

export default Widgets;
