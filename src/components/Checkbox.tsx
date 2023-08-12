import './Checkbox.css';
import TickIcon from '../assets/tick.svg';
interface CheckboxProps {
	isChecked: boolean
}

const Checkbox = (props: CheckboxProps) => {
	const {isChecked} = props;
	
	
	return (
		<div
			className={`checkbox ${isChecked ? 'checked' : ''}`}
		>
			{isChecked && (
				<div className="tick-icon-container">
					<img src={TickIcon} alt="checkbox" />
				</div>
			)}
		</div>
	);
};

export default Checkbox;
