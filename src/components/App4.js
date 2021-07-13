import React from 'react';

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    };
  }
  changeNome = (evt) => {
    this.setState({ txtNome: evt.target.value });
  }
  persistTxtNome = () => {
    this.setState({nome : this.state.txtNome});
  }

  persistName = ()=> {
      this,this.setState({nome: this.state.txtNome});
  }
  render() {
    //if(!this.state.nome) {
    const renderForm = ()=>{
        return (
            <>
            Nome: <input type='text' onChange={this.changeTxtNome}/>
            <button onClick={this.persistName}>Salvar</button>
            </>
        );
    }

   // } else {
    const renderText = ()=>{
        return (
        <>
        <p>Olá {this.state.nome}</p>
        </>
        );
    }
    return !this.state.nome ? renderForm() : renderText();   
    
  }
}

export default App4;