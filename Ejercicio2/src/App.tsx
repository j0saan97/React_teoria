import { useState } from 'react'
import ContadorConProp from './components/ContadorConProp'

// 2. Componente Padre (Ejemplo de uso)
function App() {
  const [numeroPadre, setNumeroPadre] = useState(10)

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ejemplo de Props y Estado</h2>

      {/* Modificamos la prop desde el padre */}
      <button type="button" onClick={() => setNumeroPadre(numeroPadre + 5)}>
        Actualizar Prop desde el Padre (+5)
      </button>

      <div style={{ marginTop: '15px' }}>
        <ContadorConProp valorInicial={numeroPadre} />
      </div>
    </div>
  )
}

export default App
