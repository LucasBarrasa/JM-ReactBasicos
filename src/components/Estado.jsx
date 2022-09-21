import React, {Component} from "react";
import EstadoAHijo from './EstadoHijo';

export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador:0,
        };
        
        // setInterval(()=>{
        //         this.setState({
        //             contador: this.state.contador + 1,
        //         })
        //     },1000);
    }

    render(){
        return(
            <div>
            <h2>El State</h2>
            <p>Contador: {this.state.contador}</p>
            <EstadoAHijo contadorhijo={this.state.contador}/>
            </div>
        );
    }
};
