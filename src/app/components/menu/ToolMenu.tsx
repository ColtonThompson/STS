import React from "react";
import MenuButton from "./MenuButton";

export default function ToolMenu() {
    return (
        <div>
            <div className="container mx-auto px-4 border-solid box-border h-128 w-128 p-4 border-4">
                <div className="grid grid-cols-4 grid-rows-8 gap-8">
                    <MenuButton buttonText="Countdown Tool" />
                    <MenuButton buttonText="Other Tool" />
                    <MenuButton buttonText="Other Tool 2" />
                    <MenuButton buttonText="Other Tool 3" />
                    <MenuButton buttonText="Other Tool 4" />
                    <MenuButton buttonText="Other Tool 5" />
                    <MenuButton buttonText="Other Tool 6" />
                    <MenuButton buttonText="Other Tool 7" />            
                </div>
            </div>
        </div>
    );
}