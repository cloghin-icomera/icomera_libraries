export const getClassName = (active, rounded, disabled, href, onClick) => {
	let className = rounded ? 'rounded' : ''
	if( !href && !onClick ) {
		return className + ' disabled'
	}
	className = active ? 'active' : disabled ? 'disabled' : '';
	return className;
}