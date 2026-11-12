function TarjetaUsuario({nombre, rol, activo}) {

    return (
        <div style={{border: "2px solid black", padding: "20px", backgroundColor: activo ? "green" : "grey"}}>
            <h3>nombre: {nombre}</h3>
            <p>rol: {rol}</p>
        </div>
    )

}


export default TarjetaUsuario;