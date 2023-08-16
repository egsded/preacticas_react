import React from 'react';
import './App.css';
import { NavBar } from './landinpage/navbar/NavBar';
// import { HolaMundo } from './componentes/HolaMundo';
// import { ComponenteClase } from './componentes/ComponenteClase';
// import { Componente3 } from './componentes/Componente3';
// import { ComponenteFuncional } from './componentes/ComponenteFuncional';
// import { ComponenteHijo } from './componentes/ComponenteHijo';


// const name = "Karla Idalia"
// const element = <h1>Hola {name}</h1>

// const formatName = (user: any) => {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: "phanie",
//   lastName: "zamora"
// }

// function App() {
//   return (
//     <div className="jsx-ejercicio">
//       {element}
//       <h1>Kiondas {formatName(user)}</h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <HolaMundo name="azul" />
//       <br/>
//       <ComponenteClase name="verde"/>
//     </div>
//   );
// }

function App(){
  // return(
  //   <div>
  //     <Componente3 name="amarillo"/>
  //   </div>
  // );

  // return(
  //   <>
  //     <ComponenteFuncional name="cafe"/>
  //   </>
  // )

  // return(<>
  //   <ComponenteHijo name={"pifi"} apellido1={"rodriguez"} edad={20} clickReturnName={(nameComplete)=>{
  //     console.log("Respuesta: " + nameComplete);
  //   }}/>
  // </>)

  return(
    <>
      <NavBar/>
    </>
  );
}



export default App;
