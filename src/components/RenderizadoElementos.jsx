import React, {Component} from "react";
import Data from "../helpers/data.json"

function ElementoLista (props){
    return(
        <li>
            <a href={props.el.web} target="_blank" >
                {props.el.name}
            </a>
        </li>
    )
}

export default class RenderizadoElemento extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera", "Otoño", "Verano", "Invierno"]
        }
    }
    render(){
        return(
            <div>
                <h4>Renderizado de Elementos</h4>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.seasons.map((el) => (
                        <li key={el}> {el} </li>
                        ))}
                </ol>
                <h3>Estaciones del año</h3>
                <ol>
                    {Data.Frameworks.map((el) => (
                        <ElementoLista key={el.id} el={el}/>
                    ))}
                </ol>
            </div>
        )
    }
}