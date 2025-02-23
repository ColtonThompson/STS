
import {Image} from 'primereact/image';
const loading = 'gif/loading.gif';

export default function Loading() {
    return (
        <div className="container mx-auto px-4 box-border h-128 w-128 p-4 border-4">
            <div className="items-center text-center justify-center">
                <Image src={loading} alt='loading...'/>
            </div>
        </div>

    )
}