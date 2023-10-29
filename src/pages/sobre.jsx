


export default () => {
    // Define o tamanho desejado para a imagem em pixels
    const larguraDesejada = 500; // largura em pixels
    const alturaDesejada = 900; // altura em pixels
  
    return (
      <>
        <h1>OLÁ EU SOU O ALEF, O DESENVOLVEDOR DESTE SITE</h1>
        <img
          src="imgsite.jpg"
          alt="Imagem de tecnologias"
          style={{ width: larguraDesejada, height: alturaDesejada }}
        />
      </>
    );
  };
