import { useState } from "react"

function Home(){
    return(
        <div>
            <h3>Home</h3>
            <Contador/>
            <h1>Teste</h1>
        </div>
    )

}

function Contador(){
   const [contador, setContador] = useState(1);

    function adicionaContador(){
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionaContador}>Adiciona</button>
        </div>
    )
}



export default Home