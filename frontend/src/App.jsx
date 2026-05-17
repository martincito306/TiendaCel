import { useEffect, useState } from 'react'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5sJD1zP1mD_48qQ3dZKueHYEnkXSwJxcJ50ghJNEAguFUB012N_PYIyJe_PgfcQLuog/exec'

async function llamarAppsScript(accion, datos) {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify({ accion, datos })
  })

  return await res.json()
}

function App() {
  const [productos, setProductos] = useState([])

  function cargarProductos() {
    fetch('http://localhost:3000/api/dashboard/productos')
      .then(res => res.json())
      .then(data => setProductos(data))
  }

  useEffect(() => {
    cargarProductos()
  }, [])

  async function comprar(producto) {
    const cliente = prompt('Nombre del cliente')
    const cantidad = prompt('Cantidad')

    if (!cliente || !cantidad) return

    const respuesta = await llamarAppsScript('crearVenta', {
      fecha: new Date().toISOString().substring(0, 10),
      total: Number(producto[4]) * Number(cantidad),
      estado: 'completada',
      idCliente: '1',
      usuarioVendedor: cliente
    })

    alert(respuesta.message)

    cargarProductos()
  }

  return (
    <div style={{ padding: '30px' }}>
      <h1>TiendaCel 🔥</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
            <th>Comprar</th>
          </tr>
        </thead>

        <tbody>
          {productos.slice(1).map((item, index) => (
            <tr key={index}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
              <td>${item[4]}</td>
              <td>{item[5]}</td>

              <td>
                <img src={item[6]} width="100" />
              </td>

              <td>
                <button onClick={() => comprar(item)}>
                  Comprar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App