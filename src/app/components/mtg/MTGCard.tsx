import { useState, useEffect } from "react";
import { Image } from 'primereact/image';

export default function MTGCard(props) {

  return (
    <div className="text-center">
      <h4 className="text-2xl text-bold">{props.name}</h4>
      <Image
        src={props.cardImageUrl}
        width={223}
        height={311}
        alt={props.key}
      />
    </div>
  );
}

