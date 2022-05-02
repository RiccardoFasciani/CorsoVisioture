import { useState } from "react"

import BottoneSomma from "./BottoneSomma"
import Risultato from "./Risultato"
const Somma=()=>{
    const[num1,setNum1]=useState(4)
    const[num2,setNum2]=useState(5)
    const[risultato,setRisultato]=useState(0)
    const somma=()=>{
        setRisultato(num1+num2)
    }


    return<>
    <div>Il risultato è:</div>
    <Risultato risultato={risultato}/>
    <BottoneSomma action={somma} num1={num1} num2={num2}/>
    <BottoneSomma action={()=>(console.log('Non Sommo'))}/>
    
    </>
}

export default Somma