import Image from "next/image";
import camisetaPalmeiras from '../../public/assets/camiseta.jpg';
import chaoVila from '../../public/assets/chao-vila.jpg';

export default function About() {
    return(
        <div className="w-screen h-screen bg-white flex items-center flex-col">
            <h1 className="font-aerotis text-wedding-500 text-7xl mt-12"> Nossa história</h1>
            <div className="grid grid-cols-2 mt-12">
                <div className="flex justify-center items-center w-[800px] text-xl px-10">
                    Quem diria que um furo de um amigo do Pedro para assistir o jogo do Palmeiras e um encontro mal sucedido do tinder da Tanne, 
                    acabaria resultando nessa história de amor que iremos contar abaixo:
                </div>
                <div>
                    <Image src={camisetaPalmeiras} width={800} alt="foto casal" />
                </div>
                <div>
                    <Image src={chaoVila} width={800} alt="foto casal" />
                </div>
                <div className="flex justify-center items-center w-[800px] text-lg px-10">
                    Era uma bela quarta-feira de outubro em 2019, dia de Brasileirão, quando os dois decidiram ir assistir ao jogo do Palmeiras e Santos, 
                    cada um com o seu respectivo plano para aquele jogo. Eis que no primeiro momento em que eles se olharam, não conseguiram mais se evitar. 
                    Com certeza existia algo nessa conexão que precisaria ser explorada. Mas como? A Tanne estava em um encontro com outro cara e o Pedro 
                    triste por ter levado um bolo do Piti (Valeu, Piti). Os dois saíram do bar, O Sobrado, com apenas um objetivo: eu preciso encontrar 
                    ele/ela. Depois de algumas horas com os dois se stalkeando nas redes sociais, a Tanne desistiu de procurar e foi dormir (como já é de 
                    costume), mas o Pedro encontrou uma ruiva palmeirense, a qual ele poderia ter certeza de que era a Tanne, e avisou que ela tinha 
                    esquecido a blusa dela no banco do bar, e que se ela quisesse de volta, estaria com ele. 
                </div>
                <div className="flex justify-center items-center w-[800px] text-lg px-10">
                    A ruiva que ele achou, por muita sorte, destino, acaso, sina, desígnio, o que quer que seja, era a irmã da Tanne, a Gabi, 
                    que ficou muito brava com o fato da Tanne ter esquecido a blusa que ela a havia emprestado num bar. A Gabi já foi logo avisando 
                    a Tanne que ela tinha esquecido a blusa, e quando ela viu quem tava mandando a mensagem, ela surtou, ela finalmente conseguiu achar 
                    o cara maravilhoso do bar da noite anterior. Ela sabia que não tinha esquecido blusa alguma, e o Pedro logo confessou que só inventou
                     a história da blusa porquê foi a primeira coisa que passou pela cabeça dele às 2h da manhã enquanto ele a procurava. Desde então, 
                     eles sempre souberam que viveriam uma história linda, no tempo deles, quando estivessem preparados para receber o amor um do outro!
                </div>
                <div>
                    <Image src={chaoVila} width={800} alt="foto casal" />
                </div>
                <div>
                    <Image src={chaoVila} width={800} alt="foto casal" />
                </div>
                <div className="flex justify-center items-center w-[800px] text-lg px-10">
                    Esse momento chegou, e eles não poderiam estar mais felizes de estar construindo essa história de amor. E isso é apenas o início 
                    de uma linda jornada juntos...
                </div>
                
            </div>

        </div>
    )
}



