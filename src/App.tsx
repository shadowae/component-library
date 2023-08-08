import React from "react";
import TableComponent from "./TableComponent";
import "./App.css";

const App: React.FC = () => {
    const data = [
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Jane", age: 30 },
        // ... other data
    ];
    
    const columns = [
        { name: "ID", key: "id" },
        { name: "Name", key: "name" },
        { name: "Age", key: "age" },
    ];
    
    const handleSort = (columnKey: string) => {
        // Implement sorting logic here
        console.log(columnKey)
    };
    
    const handleSelect = (selectedRows: any[]) => {
        // Implement selection logic here
        console.log(selectedRows)
        
    };
    
    return (
        <div className="app">
            <TableComponent
                data={data}
                columns={columns}
                sortable={true}
                selectable="multi"
                onSort={handleSort}
                onSelect={handleSelect}
            />
        </div>
    );
};

export default App;
