## DataTable
A data driven table.

## Usage

```javascript
import { DataTable } from '@bit/icomera.components.layout';
<DataTable />
```

## Properties

**columns**

A description of the data. The order controls the column order.
    'align' indicates how the cells in the column are aligned.
    'field' indicates which property in the data objects to associate the column with and is required.
    'header' indicates what to display in the column header.
    'render' allows for custom rendering of body cells. Use 'render' for custom formatting for things like date or to display React components. 'render' can be called with a 'row' argument that will make the row data available to the function.
    When using 'render' sorting will be disabled on the column unless the 'sort' property is specified.
    'primary' indicates that this property should be used as the unique identifier. If 'primary' is not used for any column, and 'primaryKey' isn't specified either, then the first column will be used.

```
[{
  align: 
    start (default)
    center 
    end,
  field: string (required),
  header: 
    string,
  render: function,
  primary: boolean,
  search: boolean,
  sort:
    boolean
    function
}]
```

**rows**

Array of data objects.

```
[{

}]
```

**onSelect**

When supplied, causes checkboxes to be added to each row such that the user can indicate which rows should be selected. This function will be called with an array of primary key values, suitable to be passed to the 'select' property.
If you are storing select state via a 'useState' hook, you can do something like:
'<DataTable select={select} onSelect={setSelect} />'.

```
function
```

**select**

When supplied, causes checkboxes to be added to each row to indicate which rows are selected. The values in this array should match the 'primaryKey' or 'columns[].primary' keyed value for the row's data object. If 'onSelect' is provided, the CheckBoxes are enabled and the function can be used to track select changes.

```
[
  string
  number
]
```

**rowsPerPage**

How many rows to render at a time. If no value is provided, all rows will be rendered and pagination will not be displayed.

```
number
```

**rowsPerPageOptions**

When pagination is visible allows chosing how many rows per page should be displayed. Defaults to [5, 10, 25].

```
array
```

**primaryKey**

When supplied, indicates the property for a data object to use to get a unique identifier. See also the 'columns.primary' description. Use this property when the columns approach will not work for your data set.

```
string
```

## Theme
  
Component supports Theme UI's 'sx' property. [More information](https://theme-ui.com/sx-prop).

```
<DataTable columns={columns} rows={rows} sx={{ marginLeft: 2 }}/>
```