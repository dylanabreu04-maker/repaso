import { useParams } from 'react-router-dom'

function Perfil() {
    const {id} = useParams()

    return (
        <div>
            <h2>Perfil del usuario</h2>
            <p>Id del usuario: {id}</p>
        </div>
    )
}


export default Perfil;