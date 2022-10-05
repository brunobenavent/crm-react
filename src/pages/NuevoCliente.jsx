import Formulario from "../components/Formulario"
import { useNavigate, Form } from "react-router-dom"
export async function action({request}){
  const formData = await request.formData()
  const datos= Object.fromEntries(formData)
  console.log(datos)
}


const NuevoCliente = () => {

  const navigate = useNavigate()
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
        <Form
          method='post'

        
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