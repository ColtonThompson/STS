import { useState, useEffect } from "react";
import { Image } from "primereact/image";

export default function MTGCard(props) {
  return (
    <div className="text-center border-solid">
      <h4 className="text-2xl text-bold">{props.name}</h4>
      <div className="mb-8 object-fit max-w-full max-h-full">
        <Image
          src={props.cardImageUrl}
          alt={props.key}
          preview 
        />
      </div>
    </div>
  );
}
