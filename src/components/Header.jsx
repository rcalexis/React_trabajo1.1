// hooks : useState, useEffect y useContext // estos son los primeros 

//tarea para que sirven:
//UseReducer, useCallback, useMemo,suseRef,UseImperativeHandle
//useLayoutEffect, useInsertionEffect

import { useMemo } from "react";

function Header({ cart }) {
  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  return (
    <>
      {/* <div>
        {isEmpty ? (
          <p className="text-center">el carrito esta vacio</p>
        ) : (
          <p className="text-center">el carrito no esta vacio</p>
        )}
      </div> */}

      <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                <div id="carrito" className="bg-white p-3">
                  {isEmpty ? (
                    <p className="text-center">el carrito esta vacio</p>
                  ) : (
                    <>
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((guitar) => (
                            <tr key={guitar.id}>
                              <td>
                                <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                              </td>
                              <td>{guitar.name}</td>
                              <td className="fw-bold">${guitar.price}</td>
                              <td className="flex align-items-start gap-4">
                                <button type="button" className="btn btn-dark">
                                  -
                                </button>
                                1
                                <button type="button" className="btn btn-dark">
                                  +
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-danger" type="button">
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <p className="text-end">
                        Total pagar: <span className="fw-bold">$899</span>
                      </p>
                      <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;




// hooks : useState, useEffect y useContext // estos son los primeros 

//tarea para que sirven:
//UseReducer, useCallback, useMemo,suseRef,UseImperativeHandle
//useLayoutEffect, useInsertionEffect

// import { useMemo } from "react";

// function Header({ cart }){

//     const isEmpty = useMemo (()=> cart.length === 0,[cart])

//     console.log(isEmpty)

    


//     return(

//         <>
//         <div>
//             {
//                 isEmpty ? (<p className="text-center">el carrito esta vacio</p>) : (<p className="text-center">el carrito no esta vacio</p>)
//             }
//         </div>

//  <header className="py-5 header">
//         <div className="container-xl">
//             <div className="row justify-content-center justify-content-md-between">
//                 <div className="col-8 col-md-3">
//                     <a href="index.html">
//                         <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
//                     </a>
//                 </div>
//                 <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
//                     <div 
//                         className="carrito"
//                     >
//                         <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

//                         <div id="carrito" className="bg-white p-3">
//                             {isEmpty ? (<p className="text-center">el carrito esta vacio</p>) : (<p className="text-center">el carrito no esta vacio</p>)

// }
//                             <table className="w-100 table">
//                                 <thead>
//                                     <tr>
//                                         <th>Imagen</th>
//                                         <th>Nombre</th>
//                                         <th>Precio</th>
//                                         <th>Cantidad</th>
//                                         <th></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                       {cart.map ( (guitar)=>(
                                        
//                                        <tr>

//                                         <td>
//                                             <img className="img-fluid" src={/img/${guitar.image}.jpg} alt="imagen guitarra" />
//                                         </td>
//                                         <td>{guitar.name}</td>
//                                         <td className="fw-bold">
//                                                 ${guitar.price}
//                                         </td>
//                                         <td className="flex align-items-start gap-4">
//                                             <button
//                                                 type="button"
//                                                 className="btn btn-dark"
//                                             >
//                                                 -
//                                             </button>
//                                                 1
//                                             <button
//                                                 type="button"
//                                                 className="btn btn-dark"
//                                             >
//                                                 +
//                                             </button>
//                                         </td>
//                                         <td>
//                                             <button
//                                                 className="btn btn-danger"
//                                                 type="button"
//                                             >
//                                                 X
//                                             </button>
//                                         </td>
//                                     </tr>

//                                       ))}


//                                 </tbody>
//                             </table>

//                             <p className="text-end">Total pagar: <span className="fw-bold">$899</span></p>
//                             <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>


//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     </header>
//     </>
//     )
// }

// export default Header