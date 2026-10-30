import { useState, useEffect } from 'react'

type Props = {
  valorInicial: number
}

// 1. Componente Hijo
function ContadorConProp({ valorInicial }: Props) {
  // Inicializamos el estado local usando la prop que viene de fuera
  const [contador, setContador] = useState(valorInicial)

  // Sincronizamos el estado si la prop 'valorInicial' cambia en el componente padre
  useEffect(() => {
    setContador(valorInicial)
  }, [valorInicial])

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <p>Prop recibida: <strong>{valorInicial}</strong></p>
      <p>Estado local actual: <strong>{contador}</strong></p>

      {/* Botón para modificar el estado local de forma independiente */}
      <button type="button" onClick={() => setContador(contador + 1)}>
        Sumar al Estado
      </button>
    </div>
  )
}

export default ContadorConProp
