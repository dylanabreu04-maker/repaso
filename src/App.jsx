import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import TarjetaUsuario from './TarjetaUsuario'


function App() {

  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre:"Hector", rol:"bobo", activo: true},
    { id: 2, nombre:"Miguel", rol:"administrador", activo: false}
  ])


  function agregarUsuarios() {
    setUsuarios([
      ...usuarios,
      {id: 3, nombre: "carlos", rol: "editor", activo: true}
    ])
  }


  return (
    <div>
      <button onClick={agregarUsuarios}>Agregar usuarios</button>
      {usuarios.map((usuario) => (
        <TarjetaUsuario
          key={usuario.id}
          nombre={usuario.nombre}
          rol={usuario.rol}
          activo={usuario.activo}
        />
      ))}
      
    </div>
  )
  
}

export default App;