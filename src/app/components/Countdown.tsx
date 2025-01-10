"use client"
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
        
export default function Countdown(props) {
    const [dateTime, setDateTime] = useState(null);
    return (
        <div className="card items-center justify-content-center">
            <h4>Choose A Time</h4>
            <div className="mt-3 mb-3">
                <Calendar value={dateTime} onChange={(e) => setDateTime(e.value)} showTime hourFormat="12" />
            </div>
        </div>
    );
}