export const getClassName = (
    active,
    rounded,
    disabled,
    href,
    onClick,
    hoverIndicator
) => {
    let classes = []

    if( active ) { classes.push('active') }
    if(rounded) { classes.push('rounded')  }
    if(hoverIndicator) { classes.push('hover-back') }
    if(disabled || (!href && !onClick)) { classes.push('disabled') }

    return (classes.join(' '))
}