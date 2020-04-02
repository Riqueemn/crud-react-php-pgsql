import React, { Component } from 'react';
import ListaDeRegistro from './ListaDeRegistro';
import { debounce } from 'throttle-debounce';

export default class Ver extends Component{
    constructor(props){
        super(props);

        this.state = {funcionarios: [], busca: ''};

        this.onChangePrimeiroNome = this.onChangePrimeiroNome.bind(this);

        this.consultarFuncionarios();

    }


    onChangePrimeiroNome(e){
        this.setState({
            busca: e.target.value,
        });

        setTimeout(() => {
            this.consultarFuncionarios();
        }, 50);
    }


    consultarFuncionarios(){

        const {busca} = this.state;

        fetch('http://localhost/projetos/crud/react-php-postgre-2/src/api/search.php', {
            method: 'POST',
            headers: {
                'Accept': 'Application/json',
                'content-type': 'Application/json'
            },
            body: JSON.stringify({
                buscar: busca,
        })
        })
        .then(response => response.json())
        .then(json =>
        { 
            this.setState({funcionarios: json});
            console.log(json);})
        .catch(error => {
            console.log(error);
        })
        
    }

    listarFuncionarios(){
        return this.state.funcionarios.map(function(object, i){
            return <ListaDeRegistro obj={object} key={i} />;
        });
    }

    render(){
        return (
            <div>
                <h3 align="center">Lista de Funcionários</h3>
                <form>
                    <div className="form-group">
                        <input type="text" value={this.state.primeiro_nome} onChange={ this.onChangePrimeiroNome } className="form-control" placeholder="search" />
                    </div>
                </form>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Primeiro Nome</th>
                            <th>Ultimo Nome</th>
                            <th>Email</th>
                            <th colSpan="2">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.listarFuncionarios() }
                    </tbody>
                </table>
            </div>
        )
    }
}