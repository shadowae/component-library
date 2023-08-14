import "./Cell.css";
import CheckboxForTable from "./CheckboxForTable.tsx";
import RadioForTable from "./RadioForTable.tsx";

interface CellProps {
	breakpoint: "desktop" | "mobile",
	textWeight: "bold" | "default",
	divider: "off" | "on",
	radio: "off" | "on",
	checkbox: "off" | "on",
	className ?: string,
	checkboxForTableIcon ?: any
}

export const Cell = (props: CellProps) => {
	const {
		breakpoint,
		textWeight,
		divider,
		radio,
		checkbox,
		className,
	} = props
	return (
		<div className={`cell ${className}`}>
			<div className={`frame ${breakpoint} ${radio} ${checkbox} ${textWeight}`}>
				{radio === "on" && (
					<RadioForTable
						breakpoint={breakpoint === "mobile" ? "mobile" : "desktop"}
						className="radio-for-table"
						state="on"
					/>
				)}
				
				{checkbox === "off" && <div className="text-wrapper">Text</div>}
				
				{checkbox === "on" && (
					<>
						<CheckboxForTable
							breakpoint={breakpoint === "mobile" ? "mobile" : "desktop"}
							state="on"
						/>
						<div className="div">Text</div>
					</>
				)}
			</div>
			<div className={`rectangle divider-${divider}`} />
		</div>
	);
};



export default Cell
