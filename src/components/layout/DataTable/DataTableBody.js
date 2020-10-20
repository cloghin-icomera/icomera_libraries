import React from 'react'
import { alpha } from '@theme-ui/color'
import { Box, Flex } from '../../atoms'

const sxRow = {
    p: 3,
    borderBottomColor: 'border',
    borderBottomWidth: 'thin',
    borderBottomStyle: 'solid'
}

const sxCell = width => (
    {
        flexBasis: width,
        flexGrow: width,
        flexShrink: 0,
        alignItems: 'center'
    }
)

const Row = React.memo(({id, row, template, selected}) => (
    <Flex
        className = { selected ? 'selected' : '' }
        sx={{
            ...sxRow,
            borderBottomColor: alpha('border', 0.5),
            '&.selected' : {
                bg: alpha('border', 0.25),
                boxShadow: t => `4px 0 ${t.colors.brand} inset`
            }
        }}
    >
        {template.map( (column, index) => 
            <Flex key={index} sx={sxCell(column.width)}>
                {!column.render
                    ? row[column.field]
                    : column.render(row[column.field], id)
                }
            </Flex>
        )}
    </Flex>
))

export default (
{
    pages,
    template,
    activePage,
    pageSize = 0,
    selected = []
}) => (
    <React.Fragment>
    { pages.map((page, pIndex) => 
        <Box
            key={pIndex}
            sx={{ display: activePage === pIndex ? 'block' : 'none' }}
        >
            { page.map(row =>
                <Row
                    key={row.uid}
                    id={row.uid}
                    row={row}
                    template={template}
                    selected={selected.indexOf(row.uid) !== -1}
                />
            )}
        </Box>
    )}
    </React.Fragment>
)