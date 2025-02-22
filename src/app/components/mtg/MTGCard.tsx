import {useState, useEffect} from "react";
import {Image} from "primereact/image";
import localFont from 'next/font/local'

// MTG Font
const myFont = localFont({src: '../../../../public/fonts/Matrix Bold.ttf'})

// MTG Icons
const mana_red = '../../../public/mtg/mana-r.png'
const mana_green = '../../../public/mtg/mana-g.png'
const mana_blue = '../../../public/mtg/mana-b.png'
const mana_white = '../../../public/mtg/mana-w.png'
const mana_black = '../../../public/mtg/mana-b.png'

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
    
    function getIconForColor(color: string) {
        switch (color.toLowerCase()) {
            case "white":
            case "w":
                return "<img src={mana_white} alt='white'>"
            case "black":
            case "b":
                return "<img src={mana_black} alt='black'>"
            case "green":
                return "<img src={mana_green} alt='green'>"
            case "blue":
                return "<img src={mana_blue} alt='blue'>"
            case "red":
                return "<img src={mana_red} alt='red'>"
        }
    }
    
    const cardColors = (colors) => {
        console.log(colors);
        colors.map( (color: string) => {
            return (getIconForColor(color));
        })
    }

    return (
        <div className={myFont.className}>
            <div className="text-center border-slate-600 border-solid bg-slate-900">
                <div className="mt-2">
                    <p className="mr-3 ml-3 text-2xl border-solid border-white">{props.name}</p>
                    <p className={getColorForRarity(props.rarity)}>{props.rarity.toUpperCase()}</p>
                    <p className="mr-4 ml-4">COLOR: {cardColors(props.colors)}</p>
                    <p className="mt-2">{props.type}</p>
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
