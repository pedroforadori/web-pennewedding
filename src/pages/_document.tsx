import { Html, Head, Main, NextScript, } from "next/document";

export default function Document () {
    return (
        <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.cdnfonts.com/css/aerotis" rel="stylesheet"></link>
                
            <link rel="shortcut icon" href="/assets/eucalipto.ico" />
        </Head>
        <body className="bg-app bg-cover bg-bottom bg-no-repeat h-screen w-screen max-sm:bg-contain max-sm:h-[90vh]">            
            <Main />
            <NextScript />
        </body> 
        </Html>
    )
    
}