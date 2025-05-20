import React, { useState } from 'react';


function SubmissaoTcc() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('TCC enviado:', file);
  };

  return (
    <div className="dashboard-main">
      <h2>Submissão de TCC</h2>
      <form onSubmit={handleSubmit} className="form-submissao">
        <label>
          Enviar Arquivo:
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default SubmissaoTcc;



