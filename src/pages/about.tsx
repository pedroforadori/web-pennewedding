import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";

export default function About() {
    return(
        <div className="bg-white flex items-center flex-col  mt-[-80px]">
            <h1 className="font-aerotis text-wedding-500 text-7xl mt-20 max-sm:text-4xl">Sobre a Festa</h1>
            <div className="py-8 mx-2">
                <div className="grid grid-cols-1 text-wedding-500">
                    <div className="flex flex-col mt-10 text-xl gap-2 justify-center items-center text-justify max-sm:text-xs mx-2">
                        <p className="font-semibold">
                            <span className="font-bold">Espaço: </span>Recanto Flor da Vila
                        </p>
                        <p className="font-semibold">
                            <span className="font-bold">Local: </span> Estrada Maria Cristina, 630 - Eldorado - Diadema/SP
                        </p>
                        
                        <p className="font-semibold">
                            <span className="font-bold">Horário: </span> 16h30
                        </p>
                        <p className="flex flex-row gap-2 mt-4">
                            <Link href="https://waze.com/ul?a=share_drive&locale=pt_BR&sd=-v3ANDKhD9MZy0J23A-sd&env=row&utm_source=waze_app&utm_campaign=share_drive">
                                <Image src="/assets/waze.png" alt="waze" width={20} height={20} />
                            </Link>
                            <Link href="https://maps.app.goo.gl/K7r5Vft5hP7NecaLA ">
                                <Image src="/assets/google-maps.png" alt="waze" width={20} height={20} />
                            </Link>
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-4 shadow-lg">
                        <Image src="/assets/mapa-flor-vila.jpg" alt="mapa" width={900} height={500} />
                    </div>
                </div>
                
                <div className="flex flex-col mt-10 text-xl justify-center items-center text-justify max-sm:text-xs text-wedding-500">
                    <p className="font-semibold">
                        <span className="font-bold">Traje: </span> Esporte Fino
                    </p>
                </div>
                <div className="flex flex-col mt-10 text-xl mb-60 justify-center items-center text-justify max-sm:text-xs text-wedding-500 font-bold">
                    Contato para locação de van
                    <div className="flex flex-wrap justify-center mt-2 gap-2">
                        
                        <div className="text-lg font-semibold flex flex-row items-center max-sm:text-xs">
                            <Link href="https://wa.me/5511975751709?" className="flex flex-row items-center">
                                <WhatsappLogo size={30} weight="thin" />
                                <div>
                                    <p>Gold Turismo</p>
                                    <p className="underline">11 97575-1709</p>    
                                </div>
                            </Link>
                        </div>
                        
                        <div className="text-lg font-semibold flex flex-row max-sm:text-xs">
                            <Link href="https://wa.me/5511974982426?" className="flex flex-row items-center">
                                <WhatsappLogo size={30} weight="thin" />
                                <div>
                                    <p>Breno</p>
                                    <p className="underline">11 97498-2426</p>
                                </div>
                            </Link>
                        </div>
                        
                        <div className="text-lg font-semibold flex flex-row max-sm:text-xs">
                            <Link href="https://wa.me/5511979526266?" className="flex flex-row items-center">
                                <WhatsappLogo size={30} weight="thin" />
                                <div>
                                    <p>Andrisa Turismo</p>
                                    <p className="underline">11 97952-6266</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}



