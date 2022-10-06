import Formulario from "../components/Formulario"
import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Error from "../components/Error"
import { agregarCliente } from "../data/clientes"


export async function action({request}){
  const formData = await request.formData()
  const datos= Object.fromEntries(formData)

  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }
  
  
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  const email = formData.get('email')
  if(!regex.test(email)){
    errores.push('Introduce un email válido')
  }



  if (errores.length){
    return errores
  }
  await agregarCliente(datos)
  return redirect('/')
}


const NuevoCliente = () => {
  const errores = useActionData()
  const navigate = useNavigate()

  console.log(errores)


  
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>
      <div className="flex justify-end">
        <button
          onClick={()=>navigate('/')}
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase">Volver</button>
      </div>
      <div className="bg-white shadow rounded-md mx-auto md:w-3/4 px-5 py-10">

        {errores?.length && errores.map((error, i) =>(
          <Error key={i}>{error}</Error>
        ))}
        <Form
          method='post'
          noValidate={true}

        
        >
          <Formulario
          
          />
          <input
            type='submit'
            className="w-full mt-5 bg-blue-800 hover:bg-blue-700 hover:cursor-pointer p-3 uppercase font-bold text-white text-lg"
            value = 'Registrar Cliente'
          />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente