import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ProductCard />
    </>
  )
}

export default App
