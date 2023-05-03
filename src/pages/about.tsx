import Image from "next/image";
import Link from "next/link";

export default function About() {
    return(
        <div className="bg-white flex items-center flex-col">
            <h1 className="font-aerotis text-wedding-500 text-7xl mt-12 max-sm:text-2xl">Sobre a Festa</h1>
            <div className="py-10">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col mt-10 text-xl justify-center gap-2">
                        <p>
                            <span className="font-bold">Espaço: </span>Recanto Flor da Vila
                        </p>
                        <p>
                            <span className="font-bold">Local: </span> Estrada Maria Cristina, 630 - Eldorado - Diadema/SP
                        </p>
                        
                        <p>
                            <span className="font-bold">Horário: </span> 16h30
                        </p>
                        <p className="flex flex-row mt-4">
                            <Link href="https://waze.com/ul?a=share_drive&locale=pt_BR&sd=-v3ANDKhD9MZy0J23A-sd&env=row&utm_source=waze_app&utm_campaign=share_drive">
                                <Image src="/assets/waze.png" alt="waze" width={40} height={40} />
                            </Link>
                            <Link href="https://waze.com/ul?a=share_drive&locale=pt_BR&sd=-v3ANDKhD9MZy0J23A-sd&env=row&utm_source=waze_app&utm_campaign=share_drive">
                                <Image src="/assets/google-maps.png" alt="waze" width={40} height={40} />
                            </Link>
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image src="/assets/naiara.webp" alt="mapa" width={500} height={500} />
                    </div>
                </div>
                
                <div className="flex flex-col mt-10 text-xl">
                    <p>
                        <span className="font-bold">Traje: </span> Esporte Fino
                    </p>
                </div>
                <div className="flex flex-col mt-10 text-xl mb-28">
                    Contato para locação de van
                    <div className="flex flex-row">
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}



