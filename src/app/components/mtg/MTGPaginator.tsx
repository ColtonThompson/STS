import { Paginator } from "primereact/paginator";
import React, { useState } from "react";

export default function MTGPaginator() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);


    const handlePageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    }

    return (
        <div>
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[25, 50, 75, 100]} onPageChange={handlePageChange} />          
        </div>
    );
}