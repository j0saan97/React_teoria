import { useState, type ChangeEvent } from 'react'

// 5. Validación de la prop: TypeScript obliga a que sea un número y a que se pase siempre
type Props = {
  anioInicial: number
}

// 1. Componente
function ContadorAnio({ anioInicial }: Props) {
  // 4. Estado con el año que se muestra
  const [anio, setAnio] = useState(anioInicial)

  const irAnioSiguiente = () => setAnio((anio) => anio + 1)
  const irAnioAnterior = () => setAnio((anio) => anio - 1)

  // 6. Cambiar el año escribiendo en el input; solo se aceptan números enteros
  const cambiarAnio = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value)
    if (Number.isInteger(valor)) {
      setAnio(valor)
    }
  }

  return (
    <div className="contador-anio">
      <h1>Año: {anio}</h1>
      <div className="contador-anio-botones">
        <button type="button" onClick={irAnioAnterior}>
          Año anterior
        </button>
        <button type="button" onClick={irAnioSiguiente}>
          Año siguiente
        </button>
      </div>
      <input type="text" value={anio} onChange={cambiarAnio} />
    </div>
  )
}

export default ContadorAnio
