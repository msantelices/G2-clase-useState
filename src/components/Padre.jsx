import Hijo from './Hijo.jsx'
import { useState } from 'react'

const Padre = ()=> {
    const [mensaje, setMensaje] = useState('Hola Mundo!')

    return (
        <div>
            <Hijo mensaje={mensaje} setMensaje={setMensaje}></Hijo>
        </div>
    )
}

export default Padre