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
    'field' indicates which property in the data objects to associate the column with and is required.
    'header' indicates what to display in the column header and can be either a string or a React element.
    'primary' indicates that this property should be used as the unique identifier. If 'primary' is not used for any column, and 'primaryKey' isn't specified either, then the first column will be used.
    'render' allows for custom rendering of body cells. Use 'render' for custom formatting for things like currency and date or to display React components. 'render' can be called with a 'row' argument that will make the row data available to the function. When using 'render' sorting will be disabled on the column unless 'sortOn' is defined.
    'align' indicates how the cells in the column are aligned.

```
[{
  align: 
    center
    left (default)
    right,
  header: 
    string
    node,
  field: string (required),
  render: function,
  primary: boolean,
  sortable: boolean,
  sortOn: string
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

**pageSize**

How many rows to render at a time. If no value is provided, all rows will be rendered at once. If 'pageSize' is smaller than the row count, pagination will be automatically generated.

```
number
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