import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-between w-full p-2 bg-transparent items-center px-10 max-sm:px-1 max-2xl:bg-white">
      <Link
        href="/"
      >
        <div className="flex w-full h-full bg-white rounded">
          <div className="text-xl text-wedding-500 font-aerotis font-bold max-sm:text-xs">C</div>
          <div className="text-xl text-wedding-500 font-aerotis font-bold mt-3 ml-[-15px] max-sm:text-xs max-sm:ml-[-10px] max-sm:mt-2">P</div>
        </div>
       
      </Link>
      
      <div className="flex justify-end text-white gap-7 text-xl 
                      max-sm:text-[8px] max-sm:bg-white max-sm:bg-opacity-80 max-sm:gap-2 max-sm:uppercase max-sm:text-2xl max-sm:font-bold
                    max-md:text-wedding-500
                    max-lg:text-wedding-500
                    max-xl:text-wedding-500 font-semibold
                    max-2xl:text-wedding-500
                      ">
        <Link
          href="/history"
          className="hover:underline"
        >
          Nossa História
        </Link>

        <Link
          href="/list-present"
          className="hover:underline"
        >
        Lista de Presentes
        </Link>

        <Link
          href="/confirm"
          className="hover:underline"
        >
          Confirme a Presença
        </Link>

        <Link
          href="/about"
          className="hover:underline"
        >
         Sobre a Festa
        </Link>
      </div>
    </div>

  );
}
