"use client";
import { Paginator } from "primereact/paginator";
import React, { useState } from "react";

export default function MTGPaginator( { onValueChange }) {
    const [first, setFirst] = useState(1);
    const [rows, setRows] = useState(10);
    
    const handlePageChange = (event) => {
        let page = event.page + 1;
        setFirst(event.first);
        setRows(event.rows);
        onValueChange(page);
        console.log('page = ' + page);
    }

    return (
        <div>
            <Paginator first={first} rows={rows} totalRecords={31000} onPageChange={handlePageChange} />          
        </div>
    );
}