import ContadorAnio from './components/ContadorAnio'

// 3. Usar una función para sacar el año actual
function obtenerAnioActual() {
  return new Date().getFullYear()
}

function App() {
  // 2. Le pasamos el año actual como prop
  return <ContadorAnio anioInicial={obtenerAnioActual()} />
}

export default App
