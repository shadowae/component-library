import "./RadioButton.css";

interface RadioButtonProps {
	selected: boolean,
	className?: string
}
export const RadioButton = (props: RadioButtonProps) => {
	const { selected, className }  = props
	return (
		<div className={`radio-for-table ${selected ? 'selected' : 'not-selected'} ${className}`}>
			{selected && (
				<div className="group">
					<div className="ellipse" />
				</div>
			)}
		</div>
	);
};

export default RadioButton;
