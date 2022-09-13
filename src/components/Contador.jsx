import { useState } from "react"

const Contador = ()=> {
    const [contador, setContador] = useState(0)

    // const aumentarEnUno = ()=> setContador( contador + 1 )
    // const aumentarEnDos = ()=> setContador( contador + 2 )
    const aumentar = (cantidad)=> setContador( contador + cantidad )


    return (
        <div>
            <h1>Componente contador</h1>
            <h3>Valor del contador: { contador }</h3>

            {/* <button onClick={()=> aumentarEnUno()}>Aumentar en 1</button>
            <button onClick={()=> aumentarEnDos()}>Aumentar en 2</button> */}
            <button onClick={()=> aumentar(1)}>Aumentar en 1</button>
            <button onClick={()=> aumentar(2)}>Aumentar en 2</button>
        </div>
    )
}

export default Contador