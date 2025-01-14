import { Button } from "primereact/button";
import React from "react";

export default function MenuButton(props) {

    return (
        <div>
            <Button>{props.buttonText}</Button>
        </div>
    );
}