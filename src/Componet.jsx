import React from 'react'

export default function Componet() {
  
  const evento1 =() => {alert("hola")}
    return (
    <div>
        <input type="text" />

        <button onClick={evento1} >  insertar</button>
    </div>
  )
}
