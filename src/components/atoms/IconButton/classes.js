export const getClassName = (
    active,
    rounded,
    disabled,
    href,
    onClick,
    hoverIndicator
) => {
    let className = rounded ? 'rounded ' : ''
    className += hoverIndicator ? 'hover-back' : ''
	if( !href && !onClick ) {
		return className + 'disabled '
	}
	className = active ? 'active ' : disabled ? 'disabled ' : ''
	return className;
}