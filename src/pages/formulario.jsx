import React, { useState } from 'react';

export default function App() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados coletados:', dados);
    // Aqui você pode enviar os dados para o servidor ou realizar qualquer outra ação desejada.
  };

  return (
    <div>
      <h1>Formulário de Coleta de Informações</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={dados.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Número de Telefone:
          <input
            type="tel"
            name="telefone"
            value={dados.telefone}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          CEP:
          <input
            type="text"
            name="cep"
            value={dados.cep}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

