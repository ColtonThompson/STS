"use client"
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

export default function CountdownView() {
    const [now, setNow] = useState(new Date());
    const searchParams = useSearchParams();

    const time = searchParams.get('timestamp');

    useEffect(() => {
        setInterval(() => { const today = new Date(); setNow(today) }, 1000);
    }, []);

    const getTimeRemaining = () => {
        const targetTime = new Date(time * 1000);
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


    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="font-bold text-8xl mt-12">
                {getTimeRemaining()}
            </div>
        </div>
    );
}
