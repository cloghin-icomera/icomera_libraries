import React from 'react'
import Row from './DataTableRow'

const Body = React.memo(
({
    activePage,
    columns,
    pages,
    rows,
    selected,
    primary
}) => 
    <React.Fragment>
    { rows
        .filter( row => pages[activePage].indexOf(row[primary]) !== -1 )
        .map( row => 
            <Row
                columns={columns}
                key={row[primary]}
                row={row}
                primary={primary}
                selected={selected ? selected.indexOf(row[primary]) !== -1 : undefined}
            />
        )
    }
    </React.Fragment>
)

export default Body