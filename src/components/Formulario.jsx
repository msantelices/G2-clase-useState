import { useState } from "react"
import { formatRut } from 'rutlib'

const Formulario = ()=> {
    const [nombre, setNombre] = useState("")
    const [rut, setRut] = useState("")

    const handleNombre = (e)=> {
        setNombre(e.target.value)
    }

    const handleEnviar = ()=> {
        const data = { nombre: nombre }

        console.log(data)
    }

    const handleRUT = (e)=> {
        const rut = formatRut(e.target.value)
        setRut(rut)
    }

    return (
        <div>
            <input type="text" placeholder="Nombre" onChange={(e)=> handleNombre(e)} />
            {/* <h3>Tu nombre es: { nombre }</h3> */}
            <button onClick={()=> handleEnviar()}>Enviar</button>

            <input type="text" placeholder="RUT" onChange={(e)=> handleRUT(e)} />
            <h3>Tu RUT es: { rut }</h3>
        </div>
    )
}

export default Formulario