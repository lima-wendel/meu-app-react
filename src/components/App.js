import React from "react";

class App extends React.Component{
  render(){
    return(
      //posso encapsular usando apenas <> e </> (chamado de fragmento)
      //para escrever javaScript tem que ser entre chaves
      //JSX, para escrever o html diretamente
      <div> 
        <p>
          Meu primeiro parágrafo
        </p>
        <p>
          Meu segundo parágrafo
        </p>
        <p>
          {new Date().toLocaleDateString('PT-BR')}
        </p>
      </div>
    );
  }
}

export default App;
