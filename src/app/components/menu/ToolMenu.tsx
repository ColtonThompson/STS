"use client"
import React from "react";
import { Button } from "primereact/button";

export default function ToolMenu() {

    return (
        <div>
            <div className="container mx-auto px-4 border-solid box-border h-128 w-128 p-4 border-4">
                <div className="grid grid-cols-4 grid-rows-8 gap-8">
                    <Button label="Countdown Tool" onClick={ () => { window.open('/countdown', '_blank') } }/>
                    <Button label="MTG Card Viewer" onClick={ () => { window.open('/mtg', '_blank') } }/>
                </div>
            </div>
        </div>
    );
}