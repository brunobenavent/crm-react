import { useNavigate, Form, redirect } from "react-router-dom"
import { eliminarCliente } from "../data/clientes";
export async function action({params}){
    await eliminarCliente(params.clienteId)
    return redirect('/')
}

const Cliente = ({cliente}) => {
    const navigate = useNavigate();
    const {nombre, telefono, email, empresa, id}=cliente
  return (
    
    <tr className="border-b">
        <td className="p-6">
            <p className="text-2xl text-gray-800">{nombre}</p>
            <p className="text-md ">{empresa}</p>
        </td>
        <td className="p-6">
            <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
            <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Teléfono: </span>{telefono}</p>
            
        </td>
        <td className="flex p-6 gap-3">
            <button
                onClick={()=> navigate(`/clientes/${id}/editar`)}
                type="button"
                className="text-blue-600 hover:text-blue-700 uppercase  font-bold text-xs"
            >
                Editar
            </button>
            <Form
                method="post"
                action= {`/clientes/${id}/eliminar`}
                onSubmit={(e)=>{
                    if(!confirm('¿Deseas eliminar el cliente?')){
                        e.preventDefault()
                    }
                }}
            >
            <button
                type="submit"
                className="text-red-600 hover:text-red-700 uppercase  font-bold text-xs"
            >
                Eliminar
            </button>
            </Form>
        </td>
    </tr> 
    
  )
}

export default Cliente
