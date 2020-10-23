import React from 'react'
import { Flex } from '../../atoms'

const sxCell = (width, align, fixed) => (
    {
        flexBasis: width,
        flexGrow: fixed ? 0 : width,
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center' 
    }
)

const Cell = React.memo(
({
    align = 'left',
    data,
    fixed = false,
    variant = 'body',
    width,
    ...rest
}) =>
    <Flex
        sx={ sxCell(width, align, fixed) }
        {...rest}
        variant = {variant}
        __themeKey='tables'
    >
        {data}
    </Flex>
)

export default Cell