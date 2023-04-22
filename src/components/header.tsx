import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row justify-between w-full p-2 bg-white items-center px-10">
      <Link
        href="/"
      >
        <div className="flex">
          <div className="text-2xl text-wedding-500 font-aerotis font-bold">C</div>
          <div className="text-2xl text-wedding-500 font-aerotis font-bold mt-3 ml-[-15px]">P</div>
        </div>
       
      </Link>
      
      <div className="flex justify-end text-wedding-500 gap-7 text-2xl font-bold max-sm:text-lg max-sm:bg-white max-sm:bg-opacity-80">
      <Link
        href="/history"
        className="hover:underline"
      >
        Nossa História
      </Link>

      <Link
        href="https://github.com/pedroforadori"
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
        href="https://github.com/pedroforadori"
        className="hover:underline"
      >
        Sobre a Festa
      </Link>
    </div>
    </div>

  );
}
