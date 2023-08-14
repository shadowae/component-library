import React, { useState } from 'react';
import './TableComponent.css';
import SortingIcons from "./components/SortingIcons.tsx";
import Cell from "./components/Cell.tsx";

interface TableColumnProps {
	data: never;
	columnKey: string;
	selected: boolean;
	firstColumn: boolean;
}

interface TableComponentProps {
	data: never[];
	columns: { name: string; key: string }[];
	sortable: boolean;
	selectable: 'single' | 'multi';
	onSort?: (columnKey: string, sortDirection: string | null) => void;
	onSelect?: (selectedRows: never[]) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({ data, columns, sortable, selectable, onSort, onSelect }) => {
	const [sortedColumn, setSortedColumn] = useState<string | null>(null);
	const [selectedRows, setSelectedRows] = useState<Set<never>>(new Set());
	const [sortDirection, setSortDirection] = useState<string | null>(null);
	
	const getNewDirection = (sortDirection: string | null, isNewColumn: boolean) => {
		if (isNewColumn) {
			return 'asc';
		}
		switch (sortDirection) {
			case 'asc':
				return 'desc';
			case 'desc':
				return null;
			default:
				return 'asc';
		}
	};
	
	const handleSort = (columnKey: string) => {
		if (sortable && onSort) {
			const getSortDirection = getNewDirection(sortDirection, sortedColumn !== columnKey);
			setSortDirection(getSortDirection);
			setSortedColumn(columnKey);
			onSort(columnKey, getSortDirection);
		}
	};
	
	const handleSelect = (row: never) => {
		const updatedSelectedRows = new Set(selectedRows);
		
		if (selectable === 'single') {
			updatedSelectedRows.clear();
			updatedSelectedRows.add(row)
			setSelectedRows(updatedSelectedRows);
		} else if (selectable === 'multi') {
			if (selectedRows.has(row)) {
				updatedSelectedRows.delete(row);
			} else {
				updatedSelectedRows.add(row);
			}
			setSelectedRows(updatedSelectedRows);
		}
		if (onSelect !== undefined) {
			onSelect(Array.from(updatedSelectedRows)); // Convert Set to Array before passing to onSelect
		}
	};
	
	const TableColumn: React.FC<TableColumnProps> = ({ data, columnKey ,selected, firstColumn}) => {
		return (
			<td className={'table-cell'}>
				<Cell
					textValue={data[columnKey]}
					key={columnKey}
					breakpoint={'desktop'}
					textWeight={'default'}
					divider={"off"}
					radio={selectable === 'single' && firstColumn ? 'on' : 'off'}
					checkbox={selectable === 'multi' && firstColumn ? 'on' : 'off'}
					state={selected ? 'on' : 'off'}
				/>
			</td>
		);
	};
	
	return (
		<table className="table-component">
			<thead>
			<tr className="table-header-row">
				{columns.map((column) => (
					<th key={column.key} onClick={() => handleSort(column.key)}>
						{column.name}
						{sortable && sortedColumn === column.key && (
							<SortingIcons sortDirection={sortDirection} />
						)}
					</th>
				))}
			</tr>
			</thead>
			<tbody>
			{data.map((row, index) => (
				<tr
					key={index}
					className={`table-row ${selectedRows.has(index) ? 'selected' : ''}`}
					onClick={() => handleSelect(index)}
				>
					{columns.map((column, columnIndex) => (
						<TableColumn key={column.key} data={row} columnKey={column.key} selected={selectedRows.has(index)} firstColumn={columnIndex === 0}/>
					))}
				</tr>
			))}
			</tbody>
		</table>
	);
};

export default TableComponent;
