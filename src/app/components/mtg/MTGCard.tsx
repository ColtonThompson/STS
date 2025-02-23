import React from "react";
import {Image} from "primereact/image";

import localFont from 'next/font/local'
import MTGColorIcon from "@/app/components/mtg/MTGColorIcon";

const magicFont = localFont({src: '../../../../public/fonts/Matrix Bold.ttf'})


export default function MTGCard(props) {

    function getColorForRarity(rarity: string) {
        switch (rarity.toLowerCase()) {
            case "common":
                return "text-bold text-gray-300";
            case "uncommon":
                return "text-bold text-zinc-500";
            case "rare":
                return "text-bold text-amber-600";
            case "mythic rare":
                return "text-bold text-orange-500";
            default:
                return "text-bold text-white";
        }
    }

    return (
        <div className={magicFont.className}>
            <div className="text-center border-slate-600 border-solid bg-slate-900">
                <div className="mt-2">
                    <p className="mr-3 ml-3 text-2xl border-solid border-white">{props.name}</p>
                    <p className={getColorForRarity(props.rarity)}>{props.rarity.toUpperCase()}</p>
                    <MTGColorIcon size={32} colors={props.colors}/>

                </div>
                <div className="mb-8 object-fit max-w-full max-h-full">
                    <Image
                        src={props.cardImageUrl}
                        alt={props.key}
                        preview
                    />
                </div>
            </div>
        </div>
    );
}

