interface ComponenteHijoProps{
    name: string;
    apellido1: string;
    apellido2?: string;
    edad: number;

    clickReturnName: (nameComplete: string) => void
}

export function ComponenteHijo (props:ComponenteHijoProps): JSX.Element {

    const devolverNombre = () => {
        props.clickReturnName(props.name + " " + props.apellido1 + " ")
    }

    return <>
        Hola, {props.name + " " + props.apellido1 + " "}
        {(props.apellido2 !== undefined)? props.apellido2: null}
        <br/>
        Edad: {props.edad} años.<br/>
        <button onClick={()=>{
            devolverNombre()
        }}>
            Devolver el nombre completo
        </button>
    </>
}