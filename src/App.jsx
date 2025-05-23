
import Header from "./components/Header"
import Guitarras from "./components/Guitarras"
import {db} from "./data/db"
import { useState } from "react";

function App() {

console.log(db);
const [data,setData] = useState(db);
const [cart,setCart]= useState([nuevoDato])
const nuevoDato = 
{id: 1, name: 'Lukather', image: 'guitarra_01', description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.', price: 299}

  return (
    // aqui no se utiliza un div dentro de esas etiquetas por que nos podemos confundir 
    <> 
  <Header 
  cart = {cart}
  setCart ={setCart()}
  
  />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
          <div className="row mt-5">
        {data.map ( (guitar)=>
        
            <Guitarras
            key = {guitar.id} 
            guitar = {guitar}

            />
        )}

      
        </div>
        </main>

 

    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          {/* <button 
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={()=> setData(data => [...data,nuevoDato])}
                    >Agregar al Carrito</button> */}
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
