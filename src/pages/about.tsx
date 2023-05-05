import Image from "next/image";
import Link from "next/link";
import { AddressBook } from "phosphor-react";

export default function About() {
    return(
        <div className="bg-white flex items-center flex-col">
            <h1 className="font-aerotis text-wedding-500 text-7xl mt-12 max-sm:text-4xl">Sobre a Festa</h1>
            <div className="py-8 mx-2">
                <div className="grid grid-cols-2 max-sm:grid-cols-1 text-wedding-500">
                    <div className="flex flex-col mt-10 text-xl gap-2 justify-center items-center text-justify max-sm:text-xs mx-2">
                        <p>
                            <span className="font-bold">Espaço: </span>Recanto Flor da Vila
                        </p>
                        <p>
                            <span className="font-bold">Local: </span> Estrada Maria Cristina, 630 - Eldorado - Diadema/SP
                        </p>
                        
                        <p>
                            <span className="font-bold">Horário: </span> 16h30
                        </p>
                        <p className="flex flex-row gap-2 mt-4">
                            <Link href="https://waze.com/ul?a=share_drive&locale=pt_BR&sd=-v3ANDKhD9MZy0J23A-sd&env=row&utm_source=waze_app&utm_campaign=share_drive">
                                <Image src="/assets/waze.png" alt="waze" width={20} height={20} />
                            </Link>
                            <Link href="https://waze.com/ul?a=share_drive&locale=pt_BR&sd=-v3ANDKhD9MZy0J23A-sd&env=row&utm_source=waze_app&utm_campaign=share_drive">
                                <Image src="/assets/google-maps.png" alt="waze" width={20} height={20} />
                            </Link>
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-4 shadow-lg">
                        <Image src="/assets/mapa-flor-vila.jpg" alt="mapa" width={500} height={500} />
                    </div>
                </div>
                
                <div className="flex flex-col mt-10 text-xl justify-center items-center text-justify max-sm:text-xs text-wedding-500">
                    <p>
                        <span className="font-bold">Traje: </span> Esporte Fino
                    </p>
                </div>
                <div className="flex flex-col mt-10 text-xl mb-60 justify-center items-center text-justify max-sm:text-xs text-wedding-500 font-bold">
                    Contato para locação de van
                    <div className="flex flex-wrap mt-2 gap-2">
                        
                        <div className="text-xs font-semibold flex flex-row">
                            <AddressBook size={32} weight="thin" />
                            <div>
                                <p>Gold Turismo</p>
                                <p>11 97575-1709</p>    
                            </div>
                            
                        </div>
                        
                        <div className="text-xs font-semibold flex flex-row">
                            <AddressBook size={32} weight="thin" />
                            <div>
                                <p>Breno</p>
                                <p>11 97498-2426</p>
                            </div>
                            
                        </div>
                        
                        <div className="text-xs font-semibold flex flex-row">
                            <AddressBook size={32} weight="thin" />
                            <Link href="https://wa.me/5511979526266?">
                                <p>Andrisa Turismo</p>
                                <p>11 97952-6266</p>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}



