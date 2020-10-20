export const getClassName = (active, rounded, disabled) => {
	let className = '';
	className = active ? 'active' : disabled ? 'disabled' : '';
	className += rounded ? ' rounded' : '';
	return className;
}