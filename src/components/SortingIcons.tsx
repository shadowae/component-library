import NeutralIcon from  '../assets/sorting-neutral-icon.svg';
import UpIcon from  '../assets/sorting-up-icon.svg';
import DownIcon from  '../assets/sorting-down-icon.svg';
interface SortProps {
	sortDirection: string | null
}

const SortingIcons = ({sortDirection}: SortProps) => {
	const getIcon = () => {
		console.log(sortDirection)
		if (sortDirection === 'asc') {
			return <img src={UpIcon} alt="Up Arrow" />; // Up arrow icon
		} else if (sortDirection === 'desc') {
			return <img src={DownIcon} alt="Down Arrow" />; // Down arrow icon
		} else {
			return <img src={NeutralIcon} alt="Neutral" />; // Neutral icon
		}
	};
	
	return (
		<span>{getIcon()}</span>
	);
}
export default SortingIcons;
