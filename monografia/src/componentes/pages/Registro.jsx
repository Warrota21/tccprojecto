import React from 'react'

const Registro = () => {
  return (
    <div>
      <input type="name" name="name" placeholder="Nome Completo" required value={username} onChange={(e) => setUsername(e.target.value)}/>
    </div>
  )
}

export default Registro
