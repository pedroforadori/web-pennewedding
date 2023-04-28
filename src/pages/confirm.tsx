import { FormEvent, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import { collection, addDoc, getDocs, where, query } from 'firebase/firestore'
import { firestore } from '../lib/firebase';
import { Leaf } from 'phosphor-react';

interface IGuest {
    name: string
    phone: string
}

export default function Confirm() {
    const [ name, setName ] = useState<string>()
    const [ phone, setPhone ] = useState<string>()
    const [ confirmed, setConfirmed ] = useState<string>("")
    
    async function confirmGuest(event: FormEvent) {
        event.preventDefault()
        setConfirmed("")

        const guests = listGuest(phone)

        if(!name || !phone){
            setConfirmed("Ops. É necessário digitar email e celular!")
            return
        } else if((await guests)?.length === 0){
            setConfirmed("Presença confirmada. Esperamos você!")
        } else {
            setConfirmed("Algo deu errado, ou voce ja está confirmado!")
        }

        try {
            const docRef = await addDoc(collection(firestore, "guest"), {
                name: name,
                phone: phone,
              });
    
              console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Fail")
        }

    }

    async function listGuest(phone: string | any) {
        if(phone){
            const guestRef = collection(firestore, "guest")
            const q = query(guestRef, where("phone", "==", phone))
            const querySnapshot = await getDocs(q)
            var guests: any[] = []
            querySnapshot.forEach((doc) => {
                guests.push(doc.data()) 
            });
    
            return guests
        } 
    }
    
    return (
        <div className="w-screen h-screen bg-white flex">
            <div className="h-[90vh] flex flex-col items-center justify-center">
                <h1 className="text-6xl text-white text-bold max-sm:text-2xl max-sm:text-wedding-500">Confirme sua presença aqui!</h1>
                <div className="w-full flex flex-row mt-10 justify-center max-sm:px-2">
                    <form className="text-black max-sm:flex-col" onSubmit={confirmGuest}>
                        <input 
                            className="w-60 h-20 mr-2 pl-3 text-wedding-500 text-2xl font-bold placeholder:text-wedding-500 placeholder:font-bold  placeholder:text-2xl focus:outline-none max-sm:w-full 
                            max-sm:mt-2 max-sm:border max-sm:border-b-wedding-500"
                            type="text" 
                            placeholder="Seu Nome" 
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <InputMask
                            mask="(99) 99999-9999"
                            className="w-60 h-20 mr-2 pl-3 text-wedding-500 text-2xl font-bold placeholder:text-wedding-500 placeholder:font-bold placeholder:text-2xl focus:outline-none max-sm:w-full 
                            max-sm:mt-2 max-sm:border max-sm:border-b-wedding-500"
                            type="text" 
                            placeholder="Seu Celular" 
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                        <button 
                            className="w-20 h-20 bg-wedding-100 text-white text-2xl font-bold hover:bg-wedding-100 hover:text-black max-sm:w-full max-sm:mt-4"
                            type="submit">
                                Eu vou
                        </button>
                    </form>
                </div>
                <div className="flex justify-arround items-center mt-10">
                    {confirmed && (
                        <p className="text-4xl text-wedding-500 text-bold font-bold flex justify-center text-justify w-full max-sm:mt-2  max-sm:text-2xl">
                        {confirmed}
                        <Leaf size={32}/>
                        </p>
                   )}
                   
                </div>
                
            </div>
        </div>
        
        
    )
}