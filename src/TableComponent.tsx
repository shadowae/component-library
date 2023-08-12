import React, { useState } from 'react';
import './TableComponent.css';
import SortingIcons from "./components/SortingIcons.tsx";

interface TableColumnProps {
	data: any;
	columnKey: string;
}

interface TableComponentProps {
	data: any[];
	columns: { name: string; key: string }[];
	sortable: boolean;
	selectable: 'single' | 'multi';
	onSort?: (columnKey: string, sortDirection: string | null) => void;
	onSelect?: (selectedRows: any[]) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({ data, columns, sortable, selectable, onSort, onSelect }) => {
	const [sortedColumn, setSortedColumn] = useState<string | null>(null);
	const [selectedRows, setSelectedRows] = useState<any[]>([]);
	const [sortDirection, setSortDirection] = useState<string| null>(null)
	
	const getNewDirection = (sortDirection: string | null, isNewColumn: boolean) => {
		if (isNewColumn) {
			return 'asc'
		}
		switch (sortDirection) {
			case 'asc':
				return 'desc'
			case 'desc':
				return null;
			default:
				return 'asc'
		}
	}
	
	const handleSort = (columnKey: string) => {
		if (sortable && onSort) {
			const getSortDirection = getNewDirection(sortDirection, sortedColumn !== columnKey);
			setSortDirection(getSortDirection)
			setSortedColumn(columnKey);
			onSort(columnKey, getSortDirection);
		}
	};
	
	const handleSelect = (row: any) => {
		if (selectable === 'single') {
			setSelectedRows([row]);
		} else if (selectable === 'multi') {
			setSelectedRows(selectedRows.includes(row) ? selectedRows.filter(item => item !== row) : [...selectedRows, row]);
		}
		onSelect && onSelect(selectedRows);
	};
	const TableColumn: React.FC<TableColumnProps> = ({ data, columnKey }) => {
		return (
			<td className={'table-cell'}>{data[columnKey]}</td>
		);
	};
	
	return (
		<table className="table-component">
			<thead>
			<tr className="table-header-row"> {/* Apply the header row style */}
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
				<tr key={index} className="table-row" onClick={() => handleSelect(row)}> {/* Apply the row style */}
				{columns.map((column) => (
					<TableColumn key={column.key} data={row} columnKey={column.key} />
				))}
				</tr>
			))}
			</tbody>
		</table>
	);
};

export default TableComponent;
