import React, {useState} from "react";
import TableComponent from "./TableComponent";
import "./App.css";
import sortingAlgo from './sorting.ts'
const { sortDataAscending,sortDataDescending } = sortingAlgo;

const App: React.FC = () => {
    const sampleData = [
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Jane", age: 30 },
        // ... other data
    ];
    const [data, setData] = useState(sampleData)
    
    const columns = [
        { name: "ID", key: "id" },
        { name: "Name", key: "name" },
        { name: "Age", key: "age" },
    ];
    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    
    const handleSort = (columnKey: string, sortDirection: string | null) => {
        let sortedData: any[] = [...data];
        
        if (sortDirection === 'asc') {
            sortedData = sortDataAscending(sortedData, columnKey);
        } else if (sortDirection === 'desc') {
            sortedData = sortDataDescending(sortedData, columnKey);
        }
        setData(sortedData)
    };
    
    const handleSelect = (row: any[]) => {
        // Implement selection logic here
        if (selectedRows.includes(row)) {
            setSelectedRows(selectedRows.filter(item => item !== row));
        } else {
            setSelectedRows([...selectedRows, row]);
        }
    };
    
    return (
        <div className="app">
            <TableComponent
                data={data}
                columns={columns}
                sortable={true}
                selectable="single"
                onSort={handleSort}
                onSelect={handleSelect}
            />
        </div>
    );
};

export default App;
