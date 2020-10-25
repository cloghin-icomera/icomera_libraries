export const getClassName = (
    active,
    rounded,
    disabled,
    href,
    onClick
) => {
    let classes = []

    if( active ) { classes.push('active') }
    if(rounded) { classes.push('rounded')  }
    if(disabled || (!href && !onClick)) { classes.push('disabled') }

    return (classes.join(' '))
}