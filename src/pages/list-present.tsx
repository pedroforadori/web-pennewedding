import Image from "next/image";
import Link from "next/link";
import list from "../data/list"


export default function ListPresent() {
    return(
        <div className="bg-white flex items-center flex-col">
            <h1 className="font-aerotis text-wedding-500 text-7xl mt-12 max-sm:text-2xl">Lista de Presentes</h1>
            <div className="flex flex-wrap justify-center">
                {list.map(item => (
                    <div className="flex items-center mt-10 px-3" key={item.id}>
                        <div className="bg-green-50 w-[300px] px-10 py-10">
                            {/* <h2 className="text-lg font-bold text-wedding-500 text-center">
                                {item.title}
                            </h2> */}
                            <div className="min-h-[300px] flex justify-center items-center">
                                <Image src={item.image} alt={item.title} width={200} height={200} className="py-2"/>
                            </div>
                            <p className="text-center text-wedding-500 font-bold">{item.resume}</p>
                            <p className="text-center text-lg font-bold text-wedding-500 py-3">{item.value}</p>
                            <Link href={item.buy} className="flex bg-wedding-500 w-auto text-white justify-center py-3 mt-3 hover:opacity-80" target="_blank">
                                Presentear
                            </Link>
                        </div>
                    </div>
                    
                ))}
                

            </div>

        </div>
    )
}



