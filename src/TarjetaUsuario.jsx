import { useContext } from 'react';
import { TemaContext } from './TemaContent';

function TarjetaUsuario({ nombre, rol, activo }) {
    const { oscuro, cambiarTema } = useContext(TemaContext)

    return (
        <div style={{
            border: "2px solid black",
            padding: "20px",
            backgroundColor: oscuro ? "black" : activo ? "green" : "grey",
            color: oscuro ? "white" : "black"
        }}>
            <h3>nombre: {nombre}</h3>
            <p>rol: {rol}</p>


            <button onClick={cambiarTema}> cambiar tema </button>
        </div>
    )

}


export default TarjetaUsuario;