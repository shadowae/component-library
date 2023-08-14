import "./Cell.css";
import CheckboxForTable from "./CheckboxForTable.tsx";
import RadioForTable from "./RadioForTable.tsx";

interface CellProps {
	textValue: string,
	breakpoint: "desktop" | "mobile",
	textWeight: "bold" | "default",
	divider: "off" | "on",
	radio: "off" | "on",
	checkbox: "off" | "on",
	className ?: string,
	checkboxForTableIcon ?: any,
	state?: "off" | "on"
}

export const Cell = (props: CellProps) => {
	const {
		textValue,
		breakpoint,
		textWeight,
		divider,
		radio,
		checkbox,
		className,
		state
	} = props
	return (
		<div className={`cell ${className}`}>
			<div className={`frame ${breakpoint} ${radio} ${checkbox} ${textWeight}`}>
				{radio === "on" && (
					<RadioForTable
						breakpoint={breakpoint === "mobile" ? "mobile" : "desktop"}
						className="radio-for-table"
						state={state || 'off'}
					/>
				)}
				
				{checkbox === "off" && <div className="text-wrapper">{textValue}</div>}
				
				{checkbox === "on" && (
					<>
						<CheckboxForTable
							breakpoint={breakpoint === "mobile" ? "mobile" : "desktop"}
							state={state || 'off'}
						/>
						<div className="div">{textValue}</div>
					</>
				)}
			</div>
			<div className={`rectangle divider-${divider}`} />
		</div>
	);
};



export default Cell
