import "./RadioForTable.css";
interface RadioProps {
	breakpoint: "desktop" | "mobile",
	state: "off" | "on",
	className ?: string,
}
const RadioForTable = (props: RadioProps) => {
	const { breakpoint, state, className } = props;
	return (
		<div className={`radio-for-table ${state} ${breakpoint} ${className}`}>
			{state === "on" && (
				<div className="group">
					<div className="ellipse" />
				</div>
			)}
		</div>
	);
};

export default RadioForTable;
