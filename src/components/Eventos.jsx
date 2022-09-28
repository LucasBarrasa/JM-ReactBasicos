import React, {Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);

        this.state = {
            contador: 0,
        };

        //-------- Bindind -----------

        //Al metodo sumar de la clase, le decimos que le enlazamos el metodo this de la clase
        this.sumar = this.sumar.bind(this);
        //En el constructor, estamos declarando al this de la clase una propiedad que se llama "sumar o restar", que lo que hace es igualarlo al metodo "sumar y restar", y a esos metodos le enlaza el elemento this mediante el bind.
        this.restar = this.restar.bind(this);
    }


    sumar(e){
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar(e){
        this.setState({
            contador: this.state.contador - 1,
        })
    }
    
    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase ES6</h2>
                <h3>Contador</h3>
                <button onClick={this.restar}> - </button>
                <button onClick={this.sumar}> + </button>
                <h2>{this.state.contador}</h2>
            </div>
        )
    }
}

//Properties inicializer
export class EventosES7 extends Component{
    // No es necesario declarar el constructor
    //Estamos declarando el estado como una propiedad de la clase directamente
    state = {
        contador: 0,
    }

    //Arrows function

    //El this de las arrows func toma el contexto donde se encuentran, en este caso en la clase EventosES7
    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1,
        })
    }
    
    render(){
        return(
            <div>
                <h2>Eventos en Componentes de clase ES7</h2>
                <h3>Contador</h3>
                <button onClick={this.restar}> - </button>
                <button onClick={this.sumar}> + </button>
                <h2>{this.state.contador}</h2>
            </div>
        )
    }
}