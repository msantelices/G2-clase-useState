import { useState } from 'react'

const Arrays = ()=> {
    const [listado, setListado] = useState(['ITEM 1'])

    const handleAgregar = ()=> {
        // listado.push('ITEM')
        const listadoActualizado = [...listado, 'ITEM 2']
        setListado(listadoActualizado)
    }

    return (
        <div>
            <h1>Esta solo es la introducción al manejo de Arrays con React</h1>
            <button onClick={()=> handleAgregar()}>Agregar elemento</button>
        </div>
    )
}

export default Arrays