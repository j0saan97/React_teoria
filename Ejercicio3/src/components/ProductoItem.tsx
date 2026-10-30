type Props = {
  id: number
  nombre: string
  precio: number
  cantidad: number
  alAñadir: (id: number) => void
  alRestar: (id: number) => void
}

// 1. COMPONENTE HIJO: Muestra un producto y sus botones de control
function ProductoItem({ id, nombre, precio, cantidad, alAñadir, alRestar }: Props) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      borderBottom: '1px solid #eee'
    }}>
      <div>
        <strong>{nombre}</strong> - {precio}€
      </div>

      <div>
        {/* Si no hay nada en el carrito, mostramos el botón de añadir */}
        {cantidad === 0 ? (
          <button type="button" onClick={() => alAñadir(id)}>Añadir al carrito</button>
        ) : (
          /* Si ya está en el carrito, mostramos los controles de cantidad */
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button type="button" onClick={() => alRestar(id)}>-</button>
            <span>{cantidad}</span>
            <button type="button" onClick={() => alAñadir(id)}>+</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductoItem
