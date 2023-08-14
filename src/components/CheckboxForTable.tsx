import Tick from "./Tick";
import "./CheckboxForTable.css";
interface CheckboxProps {
	breakpoint: "desktop"| "mobile",
	state: 'off' | 'on',
	className ?: string
}
const CheckboxForTable = (props: CheckboxProps) => {
	const { breakpoint, state, className } = props;
	return (
		<div className={`checkbox-for-table ${state} ${breakpoint} ${className}`}>
			{state === "on" && <Tick className={`${breakpoint === "desktop" ? "class" : "class-2"}`} />}
		</div>
	);
};

export default CheckboxForTable
