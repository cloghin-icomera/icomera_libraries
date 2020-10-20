import React, {useState} from 'react'
import { Flex, Heading } from '../../atoms'
import { ArrowUp, ArrowDown } from '../../../icons/icomera/outline'


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

const sortRows = (rows, column, direction) => {
    return [...rows].sort( (a, b) => {
        if (a[column] < b[column]) {
            return direction === 'asc' ? -1 : 1;
        }
        if (a[column] > b[column]) {
            return direction === 'asc' ? 1 : -1;
        }
        return 0;
    })
}

const ColumnTitle = ({ label, isSorted, setIsSorted, setSorted, sortFn, rows, field }) => {
    const [sortOrder, setSortOrder] = useState(false)
    return (
        <React.Fragment>
            <Heading
                as='h5'
                color={ isSorted === field ? 'text' : 'muted' }
                sx={{
                    mr: 1,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    cursor: 'pointer',
                    lineHeight: '16px'
                }}
                onClick={() => {

                    if( !sortOrder ) {
                        setSortOrder('asc')
                        setSorted(sortFn(rows, field, 'asc'))
                        setIsSorted(field)
                    }
                    if( sortOrder === 'asc' ) {
                        setSortOrder('desc')
                        setSorted(sortFn(rows, field, 'desc'))
                        setIsSorted(field)
                    }
                    if ( sortOrder === 'desc' ) {
                        setSortOrder(false)
                        setSorted(rows)
                        setIsSorted(false)
                    }
                    
                }}
            >
                {label}
            </Heading>
            { sortOrder === 'desc' && isSorted === field && <ArrowUp stroke='text' size={16} />}
            { sortOrder === 'asc' && isSorted === field && <ArrowDown stroke='text' size={16} />}
        </React.Fragment>
    )
}



export default ({ columns, rows, setSorted, ...rest }) => {
    const [ isSorted, setIsSorted ] = useState(false)
    return (
    <Flex sx={sxRow} {...rest}>
        {columns.map( (column, index) => 
            {
                //console.log(column)
                return (<Flex
                    key={index}
                    sx={ sxCell(column.width || 100 / columns.length) }
                >
                    { column.headerName &&
                        <ColumnTitle
                            label={column.headerName}
                            rows={rows}
                            field={column.field}
                            setSorted={setSorted}
                            isSorted={isSorted}
                            setIsSorted={setIsSorted}
                            sortFn={column.sortFn ? column.sortFn : sortRows}
                        />
                    }
                    { column.headerObj }
                </Flex>)
            }
        )}
    </Flex>
)}