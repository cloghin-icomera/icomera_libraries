import React from 'react'
import { Flex } from '../../atoms'
import Cell from './DataTableCell'

const Row = React.memo(
({
    columns,
    row,
    primary,
    selected,
    variant = 'row',
    ...rest
}) => 
    <Flex
        className = { selected ? 'selected' : undefined }
        variant = {variant}
        {...rest}
        __themeKey = 'tables'
    >
        { columns.map( (column, index) =>
            <Cell
                key={row[primary] + index}
                width={column.width || 100 / columns.length}
                align = {column.align}
                fixed = {column.fixed}
                data = { 
                    column.render ? column.render(row) : row[column.field]
                }
            />
        )}
    </Flex>
)

export default Row