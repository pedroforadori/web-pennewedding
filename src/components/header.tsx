import Link from "next/link";
import { List } from "phosphor-react";
import { useState } from "react";

export default function Header() {
  const [ isOpen, setIsOpen] = useState(false) 
  
  return (
    <div className="flex flex-row justify-between w-full bg-white items-center px-7 max-sm:px-1">
        <div className="h-16 my-auto text-wedding-500 text-xl mt-4 max-sm:text-xs">
          <div className="flex w-28 flex-row items-center gap-2 hover:opacity-80 cursor-pointer
            max-sm:w-20">
                <List 
                    size={40} 
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                /> 
                <span onClick={() => setIsOpen(isOpen => !isOpen)}> MENU</span> 
          </div>
          <div className="w-3/12 h-screen bg-white absolute overflow-x-hidden text-2xl hidden left-0 p-8 z-10 bg-opacity-80
                          max-sm:text-4xl max-sm:w-full max-sm:px-1"
               style={{display: isOpen ? 'block' : 'none'}}
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/history"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Nossa História
              </Link>

              <Link
                href="/list-present"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
              Lista de Presentes
              </Link>

              <Link
                href="/confirm"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Confirme a Presença
              </Link>

              <Link
                href="/about"
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
              Sobre a Festa
              </Link>
            </div>
            
        </div>
      </div>
      <Link
        href="/"
      >
        <div className="flex w-full h-full bg-white rounded-full p-3">
          <div className="text-xl text-wedding-500 font-aerotis font-bold max-sm:text-xs">C</div>
          <div className="text-xl text-wedding-500 font-aerotis font-bold mt-3 ml-[-15px] max-sm:text-xs max-sm:ml-[-10px] max-sm:mt-2">P</div>
        </div>
       
      </Link>
      

    </div>

  );
}
