import { useState, useEffect } from 'react';

function ListaApi() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        async function obtenerUsuarios() {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")

            const datos = await respuesta.json()

            setUsuarios(datos)
        }
        obtenerUsuarios()
    }, [])

    return (
        <div>
            <h2>Lista de usuarios</h2>

            {usuarios.map((usuario) => (
                <p key={usuario.id}>{usuario.name}</p>
            ))}
        </div>
    )
}   

export default ListaApi;