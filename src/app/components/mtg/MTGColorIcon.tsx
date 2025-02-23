import {Image} from 'primereact/image';

// MTG Icons
const mana_red = {key: 'mana_red', src: 'mtg/mana-r.png', alt: 'Red'}
const mana_green = {key: 'mana_green', src: 'mtg/mana-g.png', alt: 'Green'};
const mana_blue = {key: 'mana_blue', src: 'mtg/mana-u.png', alt: 'Blue'};
const mana_white = {key: 'mana_white', src: 'mtg/mana-w.png', alt: 'White'}
const mana_black = {key: 'mana_black', src: 'mtg/mana-b.png', alt: 'Black'}

export default function MTGColorIcon(props) {

    function getIcon(value: string) {
        switch (value.toLowerCase()) {
            case 'r':
                return <Image src={mana_red.src} width={props.size} height={props.size} alt={mana_red.alt} key={mana_red.key}/>
            case 'g':
                return <Image src={mana_green.src} width={props.size} height={props.size} alt={mana_green.alt} key={mana_green.key}/>
            case 'u':
                return <Image src={mana_blue.src} width={props.size} height={props.size} alt={mana_blue.alt} key={mana_blue.key}/>
            case 'w':
                return <Image src={mana_white.src} width={props.size} height={props.size} alt={mana_white.alt} key={mana_white.key}/>
            case 'b':
                return <Image src={mana_black.src} width={props.size} height={props.size} alt={mana_black.alt} key={mana_black.key}/>
        }

    }

    return (
        <div>
            {props?.colors?.map((value) => getIcon(value))}
        </div>
    )
}