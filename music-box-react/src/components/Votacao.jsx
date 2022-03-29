import React, {useState} from 'react';

export default props=>{
    const[numero, setNumero] = useState(0)
    return(
        <>
        <h1>{props.titulo}</h1>
        <button onClick={()=>{
            setNumero(numero+1);
        }}>Votar</button>
        <h1>Quantidade votos:{numero}</h1>
        </>
    )
}