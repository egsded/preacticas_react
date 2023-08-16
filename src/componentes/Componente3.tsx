import React from "react";

interface Component3Props{
    name: string;
}

export class Componente3 extends React.Component<Component3Props, any>{
    constructor(props: Component3Props){
        super(props);
        this.state = {
            name: this.props.name
        }
    }
    
    render(){
        return <>
        Hola, {this.state.name}<br/>
        <button onClick={()=>{
            this.setState({name: "penny"})
        }}>
            Cambiar Nombre
        </button>
        </>
    }

    componentDidMount(){
        console.log("didMount");
    }

    componentDidUpdate(prevProps: Readonly<Component3Props>, prevState: Readonly<any>, snapshot?: any){
        console.log("didUpdate");
    }

    componentWillUnmount(){
        console.log("willunmount");
    }
}

interface Componente3State{
    name: string;
}