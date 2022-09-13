import { useState } from 'react'

const Estilos = ()=> {
    const [color, setColor] = useState(false)

    return (
        <div>
            <button onClick={()=> setColor(!color)}>Cambiar color</button>
            <h1 className={ color ? "rojo" : "" }>Cambiando estilos con React</h1>
        </div>
    )
}

export default Estilos