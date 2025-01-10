"use client"
import React, { useEffect, useState, useRef } from "react";
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import { Fieldset } from 'primereact/fieldset';
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';

export default function CountdownTool() {
    const toast = useRef(null);
    const baseURL = "http://localhost:3000";

    const [now, setNow] = useState(new Date())
    const [targetTime, setTargetTime] = useState(new Date());
    const [timestamp, setTimestamp] = useState(0);
    const [url, setURL] = useState('');

    useEffect(() => {
        setInterval(() => { const today = new Date(); setNow(today) }, 1000);
    }, []);

    const handleDateChange = (e) => {
        const parsedDate = new Date(e.value);
        const ts = Math.floor(parsedDate.getTime() / 1000);
        setTargetTime(parsedDate);
        setTimestamp(ts);
        setURL(baseURL + "/countdown?timestamp=" + ts);
    };

    const handleCopyURL = (e) => {
        navigator.clipboard.writeText(url);
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Link Copied!', life: 3000 });
    };

    const getTimeRemaining = () => {
        const today = now.getTime() / 1000;
        const seconds = Math.floor((targetTime.getTime() / 1000) - today);

        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        let countdown = "";
        if (days <= 0 && hours <= 0 && minutes <= 0 && remainingSeconds <= 0) {
            countdown = "ITS HAPPENING NOW!"
        } else {
            countdown = days + " days " + hours + " hrs " + minutes + " mins " + remainingSeconds + " seconds";
        }

        return countdown;
    };

    const showCountdown = () => {
        return (
            <div className="flex items-center justify-center w-full">
                <div className="font-bold text-4xl mt-12 h-screen">
                    {getTimeRemaining()}
                </div>
            </div>
        )
    };

    return (
        <div className="block text-center">
            <Toast ref={toast} />

            <Fieldset legend="Countdown Tool" className="justify-center items-center w-screen">
                <label htmlFor="calendar" className="font-bold mb-2 text-center">
                    Choose a Date & Time
                </label>
                <div className="mt-3 mb-3">
                    <Calendar id="calendar" className="w-1/2" value={targetTime} onChange={handleDateChange} showTime hourFormat="12" />
                </div>
                <label htmlFor="url" className="font-bold mb-2 text-center">
                    Countdown URL (for OBS)
                </label>
                <div className="mt-3 mb-3">
                    <InputText id="url" disabled className="w-1/2" placeholder="URL will show here!" value={url} />
                </div>
                <div className="mb-3 justify-between">
                    <Button className="mr-5"label="Open URL" onClick={() => window.open(url, '_blank')} />
                    <Button label="Copy URL" onClick={handleCopyURL} />
                </div>
            </Fieldset>

            <div className="flex items-center justify-center mt-4">
                <h3>Countdown Preview:</h3>
            </div>
            {showCountdown()}
        </div>

    );

}