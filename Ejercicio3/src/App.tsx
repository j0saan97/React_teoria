import { useState } from 'react'
import ProductoItem from './components/ProductoItem'

type Producto = {
  id: number
  nombre: string
  precio: number
  cantidad: number
}

// 2. COMPONENTE PADRE: Gestiona el estado global del carrito y calcula el total
function App() {
  // Estado inicial de la tienda
  const [productos, setProductos] = useState<Producto[]>([
    { id: 1, nombre: 'Teclado Mecánico', precio: 80, cantidad: 0 },
    { id: 2, nombre: 'Ratón Wireless', precio: 40, cantidad: 0 },
    { id: 3, nombre: 'Monitor 24"', precio: 150, cantidad: 0 }
  ])

  // Función del Padre para INCREMENTAR unidades (se le pasa al hijo)
  const incrementarCantidad = (id: number) => {
    setProductos(productos.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    ))
  }

  // Función del Padre para DECREMENTAR unidades (se le pasa al hijo)
  const decrementarCantidad = (id: number) => {
    setProductos(productos.map(item =>
      item.id === id && item.cantidad > 0
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    ))
  }

  // Cálculo derivado: Estado → Total (no requiere useState extra)
  const totalItems = productos.reduce((acc, item) => acc + item.cantidad, 0)
  const totalPrecio = productos.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h2>Tienda en Línea</h2>

      {/* Renderizamos la lista de hijos */}
      {productos.map(prod => (
        <ProductoItem
          key={prod.id}
          id={prod.id}
          nombre={prod.nombre}
          precio={prod.precio}
          cantidad={prod.cantidad}
          alAñadir={incrementarCantidad}
          alRestar={decrementarCantidad}
        />
      ))}

      {/* Resumen del Carrito en el Padre */}
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '6px' }}>
        <h3>Resumen</h3>
        <p>Productos en el carrito: <strong>{totalItems}</strong></p>
        <p>Total a pagar: <strong>{totalPrecio}€</strong></p>
      </div>
    </div>
  )
}

export default App
