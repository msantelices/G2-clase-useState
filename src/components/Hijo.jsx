const Hijo = ({ mensaje, setMensaje })=> {
    return (
        <div>
            <h1>{ mensaje }</h1>
            <button onClick={()=> setMensaje("Chao Mundo!")}>Cambiar mensaje</button>
        </div>
    )
}

export default Hijo