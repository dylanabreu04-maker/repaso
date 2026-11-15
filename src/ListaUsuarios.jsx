import {Link} from 'react-router-dom'

function ListaUsuarios() {
    return (
        <div>
            <h2>Lista de usuarios</h2>
            <Link to="/perfil/1">Perfil de Dylan</Link>
            <br />
            <Link to="/perfil/2">Perfil de Carlos</Link>
        </div>
    )
}

export default ListaUsuarios;