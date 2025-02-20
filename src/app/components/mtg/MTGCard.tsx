import {useState, useEffect} from "react";
import {Image} from "primereact/image";

export default function MTGCard(props) {

    function getColorForRarity(rarity: string) {
        switch (rarity.toLowerCase()) {
            case "common":
                return "text-bold text-gray-600";
            case "uncommon":
                return "text-bold text-zinc-900";
            case "rare":
                return "text-bold text-amber-600";
            case "mythic rare":
                return "text-bold text-orange-500";
            default:
                return "text-bold text-white";
        }
    }

    return (
        <div className="text-center border-slate-600 border-solid bg-slate-900">
            <div className="mt-2">
                <h4 className="text-bold">{props.name}</h4>
                <p className={getColorForRarity(props.rarity)}>{props.rarity.toUpperCase()}</p>
            </div>
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
