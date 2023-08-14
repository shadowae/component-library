import './Tick.css';
import TickIcon from '../assets/tick.svg';
interface TickProps {
	className?: string
}
const Tick = (props: TickProps) => {
	return (
		<div className={`tick-screen ${props.className}`}>
			<img src={TickIcon} className="combined-shape" alt="Combined shape"  />
		</div>
	);
};

export default Tick;
