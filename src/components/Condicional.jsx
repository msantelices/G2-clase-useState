import { useState } from 'react'

const Condicional = ()=> {
    const [mostrar, setMostrar] = useState(false)
    const [mensaje, setMensaje] = useState("Mostrar mensaje")

    const handleClick = ()=> {
        setMostrar(!mostrar)
        if(mensaje === "Mostrar mensaje") {
            setMensaje("Ocultar mensaje")
        } else {
            setMensaje("Mostrar mensaje")
        }
    }

    return (
        <div>
            <button onClick={()=> handleClick()}>{ mensaje }</button>

            {/* { mostrar ? 
                <h1>Hola Mundo!</h1>
            : ""} */}
            { mostrar && <h1>Hola Mundo!</h1> }
            {/* { !mostrar && <h1>Chao Mundo!</h1> } */}

        </div>
    )
}  

export default Condicional